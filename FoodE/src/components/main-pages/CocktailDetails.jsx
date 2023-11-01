import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import DataContext from '../../DataContext'




export default function CocktailDetails () {

    const { cocktailDetailData, setCocktailDetailData } = useContext(DataContext)


    const parseCocktailDetailData = () => {
        const data = cocktailDetailData

        const title = data.strDrink
        const imageURL = data.strDrinkThumb
        const videoURL = data.strVideo
        const instructionsEng = data.strInstructions

        const glass = data.strGlass

    }

    return (
        <div className="CocktailDetails">
            <h4>CocktailDetails</h4>
        </div>
    )
}   