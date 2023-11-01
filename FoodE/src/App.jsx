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
  const [searchDisplay, setSearchDisplay] = useState('')


  //const response = API Call for search
  //setSearchResultsData(response.data)
  //console.log(searchResultsData) ==> This will be the array of cocktails that returned from the search

  return (
    <div className='App'>
      <DataContext.Provider value={{
        cocktailDetailData, setCocktailDetailData,
        searchResultsData, setSearchResultsData,
        isRandomCocktail, setIsRandomCocktail,
        searchDisplay, setSearchDisplay
      }}>
        <Header />
        <Main />
        <Footer />
      </DataContext.Provider>
    </div>
  )
}

export default App
