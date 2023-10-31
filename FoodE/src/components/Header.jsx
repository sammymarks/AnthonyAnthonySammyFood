import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import Nav from './Nav'

export default function Header () {
    return (
        <div className="Header">
            <h4>Header</h4>
            <h5>Search Bar</h5>
            <h5>NavBar</h5>
            <Nav />
        </div>
    )
}   