import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import DataContext from '../../DataContext'



export default function Cocktails () {

    const { cocktailDetailData, setCocktailDetailData, searchResultsData, setSearchResultsData } = useContext(DataContext)


    return (
        <div className="Cocktails">
            <h4>Container for 11 category buttons</h4>
        </div>
    )
}   