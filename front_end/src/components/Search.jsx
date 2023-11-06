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
            <Link to={"/"}>
                <Logo>RecipesTime</Logo>
            </Link>
            <FormStyle onSubmit={submitHandler}>
                <input type="text" placeholder="Search for any food item..." value={input} onChange={(e) => setInput(e.target.value)} />
            </FormStyle>
        </Container>
    )
}

const FormStyle = styled.form`
 margin:2rem 0;
 width:40%;
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
gap:3rem;
align-items:center;
`
export default Search