import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searchItem/" + input)
    }

    return (
        <Container>
            <Left_section>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <Logo>RecipesTime</Logo>
            </Link>
            
            <FormStyle onSubmit={submitHandler}>
                <input type="text" placeholder="Search for any food item..." value={input} onChange={(e) => setInput(e.target.value)} />
            </FormStyle>
            </Left_section>

            <Link to={"/favourites"} style={{ textDecoration: 'none' }}>
            <h2>Your Favourites</h2>
            </Link>
        </Container>
    )
}

const Left_section = styled.div`
display:flex;
align-items:center;
gap:3rem;
width:70%;
`

const FormStyle = styled.form`
 margin:2rem 0;
 width:60%;
 input{
    width:100%;
    border:none;
    background-color:#404040;
    font-size:1rem;
    padding:0.5rem 2rem;
    border-radius:5rem;
    outline:none;
    color:white;
 }

`

const Logo = styled.a`
     font-family: 'EB Garamond', serif; 
     font-size:2.3rem;
     color:black;
     text-decoration:none;
     
`

const Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;

h2{
    color:white;
    background-color:#fcba03;
    padding:0.5rem 1rem;
    border-radius:15px;
    font-size:1.4rem;
    text-decoration:none;
    width:max-content;

    &:hover{
        scale:1.04;
        cursor:pointer;
    }
}

`
export default Search