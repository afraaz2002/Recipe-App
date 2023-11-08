
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Recipe() {

  let params = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetchRecipe();
  }, [params.name]);

  const fetchRecipe = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const recipeInfo = await data.json();
    // console.log(recipeInfo.extendedIngredients);
    setInfo(recipeInfo);
  }

  const postRecipe = async (event) => {
    alert("Added to favourites!");
 
    try{
       await axios.post("http://localhost:5000/favourites",{id:params.name});  
    }catch(err){
      console.log(err);
    }
    
  }

  return (

    <InfoWrapper>
      <div>
        <h2>{info.title}</h2>
        <img src={info.image} alt="" style={{ width: "34rem" }} />
        <button onClick={postRecipe}>Add to favourites</button>
        {/* {console.log(info.extendedIngredients)} */}
        {/* { <ul>
                    {info.extendedIngredients.map((ingredient) => {
                        <li key={ingredient.id}> {ingredient.original}</li>
                    })}
                </ul> } */}
      </div>

      <div>
        <h2>Food Details</h2>
        <p dangerouslySetInnerHTML={{ __html: info.summary }}></p>
        <h2>Procedure</h2>
        <p dangerouslySetInnerHTML={{ __html: info.instructions }}></p>
      </div>

    </InfoWrapper>
  )
}

const InfoWrapper = styled.div`
  margin:1rem 0;
  display:flex;
  gap:8rem;

  h2{
    margin-bottom:1rem;
  }

  img{
    border-radius:2rem;
    object-fit:cover;
  }
  p{
    text-align:justify;
    margin-bottom:2rem;
  }

  li{
    font-size:1.1rem;
    line-height:2rem;
  }

  ul{
    margin-top:2rem;
  }

  button{
    background-color:#0dd643;
    color:white;
    margin:2rem 0;
    padding:0.5rem 1rem;
    font-size:1.2rem;
    border:none;
    border-radius:5px;
  }

`


export default Recipe