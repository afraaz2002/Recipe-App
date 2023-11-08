import React from 'react'
import { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function Favourites() {

    const navigate = useNavigate();
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);

    useEffect(() => {
        getfavouriteRecipes();
       }, []);

    const getfavouriteRecipes = async () => {
       
        let response = await axios.get("http://localhost:5000");
        let recipes = await response.data;
       
        setFavouriteRecipes(recipes);
        // console.log(recipes);
    };

    const deleteRecipe = async (recId) => {
      setTimeout(() => {
        navigate(0);
      },100);
     
      alert("Deleted from favourites!");

      console.log(recId);

      try{
        await axios.post("http://localhost:5000/delete",{id:recId});  
      }catch(err){
        console.log(err);
      }

    }
  
    return (
        <div>
        <Heading>Your Favourites</Heading>
        <Grid>
          {favouriteRecipes.map((item) => {
            return (
              <Card key={item._id}>
                <button onClick={() => deleteRecipe(item._id)}>X</button>
                <Link to={"/recipe/" + item.recipeId}>
                  <img src={item.url} />
                  <h4>{item.title}</h4>
                </Link>
              </Card>
            )
          })}
    
        </Grid>
        </div>
    
      )
    }
    
    const Grid = styled.div`
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
      grid-gap:1.5rem;
    `

    const Heading = styled.h1`
      font-size:2rem;
      text-align:center;
      margin-bottom:1rem;
      color:#003a8c;
      text-decoration:underline;
    `
    
    const Card = styled.div`
    position:relative;

    img{
        width:100%;
        border-radius:2rem;
    }
    
    h4{
        text-align:center;
        padding:1rem;
        color:black;
    
    }
    
    a{
      text-decoration:none;
    }

    button{
      position:absolute;
      right:5%;
      top:5%;
      padding:0.4rem 0.9rem;
      font-size:1.5rem;
      background-color:#ff4f4f;
      color:white;
      border-radius:7px;
      border:none;
      font-family:arial,sans-serif;
      display:none;
    }
    
    &:hover{
      button{
        display:block;
      }
    }
    `

export default Favourites

