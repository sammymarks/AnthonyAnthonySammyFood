import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate, Routes, Route } from "react-router-dom"
import axios from 'axios'

import Home from './main-pages/Home'
import Cocktails from './main-pages/Cocktails'
import CocktailsByCategory from './main-pages/CocktailsbyCategory'
import CocktailDetails from './main-pages/CocktailDetails'
import Ingredients from './main-pages/Ingredients'
import IngredientDetails from './main-pages/IngredientDetails'


export default function Main () {
    return (
        <div className="Main">
            <h4>Main</h4>
            <div className='routes-container'>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/cocktails" element={<Cocktails/>} />
                    <Route path="/cocktails/:category" element={<CocktailsByCategory />} />
                    <Route path="/cocktails/:id" element={<CocktailDetails />} />
                    <Route path="/ingredients" element={<Ingredients/>} />
                    <Route path="/ingredients/:id" element={<IngredientDetails />} />
                </Routes>
            </div>
        </div>
    )
}   