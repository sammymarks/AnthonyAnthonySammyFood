
import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'


export default function Nav () {
    return(
        <div className="Nav">
            <Link className="Nav-link" to="/"><div>Home</div></Link>
            <Link className="Nav-link" to="/cocktails"><div>Cocktails</div></Link>
            <Link className="Nav-link" to="/random"><div>Random Cocktail</div></Link>
        </div>
    )
}