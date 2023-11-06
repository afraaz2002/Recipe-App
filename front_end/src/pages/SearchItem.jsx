import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function SearchItem() {

  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  const getSearchRecipes = async () => {
    const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${params.find}&apiKey=${process.env.REACT_APP_API_KEY}`);
    const response = await recipes.json();

    setSearchRecipes(response.results);
  };

  useEffect(() => {
    getSearchRecipes();
  }, [params.find]);

  return (

    <Grid>
      {searchRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}

    </Grid>

  )
}

const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
  grid-gap:1rem;
`

const Card = styled.div`
img{
    width:90%;
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
`

export default SearchItem