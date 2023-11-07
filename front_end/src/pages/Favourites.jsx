import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function Favourites() {
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
  
    return (
        <Grid>
          {favouriteRecipes.map((item) => {
            return (
              <Card key={item._id}>
                <Link to={"/recipe/" + item.recipeId}>
                  <img src={item.url} />
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

export default Favourites

