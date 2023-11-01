import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import Nav from './Nav'

export default function Header () {
    return (
        <div className="Header">
            <h4>Cocktail Connoisseurs</h4>
            <h5>Search Bar</h5>
            <h6>NavBar</h6>
            <Nav />
        </div>
    )
}   