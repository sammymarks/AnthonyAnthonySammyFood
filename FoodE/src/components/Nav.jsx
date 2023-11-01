
import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import DataContext from '../DataContext'


export default function Nav () {

    const { cocktailDetailData, setCocktailDetailData, isRandomCocktail, setIsRandomCocktail } = useContext(DataContext)


    const getRandom = async () => {
        console.log("getRandom is running")
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        console.log("response", response.data.drinks[0])
        setCocktailDetailData(response.data.drinks[0])
        // console.log("usestate", cocktailDetailData)
    }
    
    return(
        <div className="Nav">
            <Link className="Nav-link" to="/"><div>Home</div></Link>
            <Link className="Nav-link" to="/cocktailsearch"><div>Search Cocktails</div></Link>
            <Link className="Nav-link" onClick={() => getRandom()} to="/cocktaildetails"><div>Random Cocktail</div></Link>
        </div>
    )
}