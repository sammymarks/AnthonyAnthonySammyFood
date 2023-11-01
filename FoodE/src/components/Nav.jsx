
import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import DataContext from '../DataContext'


export default function Nav () {

    const { cocktailDetailData, setCocktailDetailData } = useContext(DataContext)

    //INSERT Function for Randon Cocktail API call when Random is clicked


    return(
        <div className="Nav">
            <Link className="Nav-link" to="/"><div>Home</div></Link>
            <Link className="Nav-link" to="/cocktailsearch"><div>Search Cocktails</div></Link>
            {/* <button classname="Nav-link"> </button> */}
            {/* <Link className="Nav-link" to="/cocktaildetails"><div>Cocktails Details</div></Link> */}
        </div>
    )
}