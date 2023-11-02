import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import Nav from './Nav'

export default function Header () {
    return (
        <header>
        <div className="Header">
            <h4>Cocktail Connoisseurs</h4>
            <Nav />
        </div>
        </header>
    )
}   