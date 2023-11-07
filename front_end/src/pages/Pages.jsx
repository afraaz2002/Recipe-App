import React from 'react'
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import SearchItem from './SearchItem';
import Recipe from './Recipe';
import Favourites from './Favourites';

function Pages() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/searchItem/:find' element={<SearchItem />} />
            <Route path='/recipe/:name' element={<Recipe />} />
            <Route path='/favourites' element={<Favourites/>} />
        </Routes>
    )
}

export default Pages;