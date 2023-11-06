import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopularRecipes();
    }, [])

    const getPopularRecipes = async () => {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`)
        const response = await recipes.json();
        setPopular(response.recipes);
    }

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "3rem",
                }}>
                    {popular.map((item) => {
                        return (
                            <SplideSlide key={item.id}>
                                <Card>
                                    <Link to={"/recipe/" +item.id}>

                                        <p>{item.title}</p>
                                        <img src={item.image} />
                                        <Gradient />
                                    </Link>
                                </Card>

                            </SplideSlide>
                        )

                    })}
                </Splide>
            </Wrapper>
        </div>
    )

}

const Wrapper = styled.div`
  margin: 1rem 0rem;
`;

const Card = styled.div`
  min-height: 13rem;
  border-radius:2rem;
  overflow:hidden;
  width:100%;
  position:relative;
  transition:scale 0.3s ease-in-out;

  img{
    border-radius:2rem;
    position:absolute;
    width:100%;
    object-fit:cover;
    left:0;
  }

  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0;
    text-align:center;
    height:30%;
    transform:translate(-50%,0%);
    color:white;
    width:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.8rem;
    font-weight:500;
  }
  
  &:hover {
    scale:1.04;
  }
  `

const Gradient = styled.div`
   z-index:5;
   position:absolute;
   bottom:0;
   width:100%;
   height:100%;
   background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6));
  
  `
export default Popular