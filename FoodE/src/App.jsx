import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'
import DataContext from './DataContext'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  //GLOBAL USESTATES
  const [cocktailDetailData, setCocktailDetailData] = useState({})
  const [searchResultsData, setSearchResultsData] = useState([{}])
  const [isRandomCocktail, setIsRandomCocktail] = useState(false)


  return (
    <div className='App'>
      <DataContext.Provider value={{
        cocktailDetailData, setCocktailDetailData,
        searchResultsData, setSearchResultsData,
        isRandomCocktail, setIsRandomCocktail
      }}>
        <Header />
        <Main />
        <Footer />
      </DataContext.Provider>
    </div>
  )
}

export default App
