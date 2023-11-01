import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate, Routes, Route } from "react-router-dom"
import axios from 'axios'

import Home from './main-pages/Home'
import CocktailSearch from './main-pages/CocktailSearch'
import CocktailsByCategory from './main-pages/CocktailsbyCategory'
import CocktailDetails from './main-pages/CocktailDetails'
import Ingredients from './main-pages/Ingredients'
import IngredientDetails from './main-pages/IngredientDetails'


export default function Main () {
    return (
        <div className="Main">
            <div className='routes-container'>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cocktailsearch" element={<CocktailSearch/>} />
                    <Route path="/cocktaildetails" element={<CocktailDetails/>} />
                    {/* <Route path="/cocktails/:category" element={<CocktailsByCategory />} />
                    <Route path="/ingredients" element={<Ingredients/>} />
                    <Route path="/ingredients/:name" element={<IngredientDetails />} /> */}
                </Routes>
            </div>
        </div>
    )
}   