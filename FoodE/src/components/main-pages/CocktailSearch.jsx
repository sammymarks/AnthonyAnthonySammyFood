import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext from '../../DataContext'
import { NAME_BASE_URL, INGREDIENT_FILTER_URL } from '../../../globals'
import '../../App.css' 


export default function CocktailsData() {
  
  const { cocktailDetailData, setCocktailDetailData, searchResultsData, setSearchResultsData, searchDisplay, setSearchDisplay } = useContext(DataContext);
  const navigate = useNavigate();

  const [searchName, setSearchName] = useState('');
  const [searchIngredient, setSearchIngredient] = useState(``);

  const GetCocktailbyName = async (name) => {
    try {
      const response = await axios.get(`${NAME_BASE_URL}${name}`);
      setSearchResultsData(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleNameSubmit = async (e) => {
    e.preventDefault();
    if (searchName) {
      setSearchDisplay(searchName)
      GetCocktailbyName(searchName);
    }
  }

  const GetCocktailbyIngredient = async (ingredient) => {
    try {
      const response = await axios.get(`${INGREDIENT_FILTER_URL}${ingredient}`);
      setSearchResultsData(response.data);
      console.log("response", response);
      console.log(".drinks", response.data.drinks)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleIngredientSubmit = async (e) => {
    e.preventDefault();
    if (searchIngredient) {
      setSearchDisplay(searchIngredient)
      GetCocktailbyIngredient(searchIngredient);
    }
  }





  const goToGridItem = (index) => {
    setCocktailDetailData(searchResultsData.drinks[index])
    navigate('/cocktaildetails');
  }

  return (
    <div className="Cocktails">
      <h2 className="title">Cocktail Search Index</h2>
      
      <form onSubmit={handleNameSubmit}>
        <input
          className='search-input'
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter cocktail name"
        />
        <button className="search-submit-button" type="submit">Submit</button>
      </form>
      
      <form onSubmit={handleIngredientSubmit}>
        <input
          className='search-input'
          type="text"
          value={searchIngredient}
          onChange={(e) => setSearchIngredient(e.target.value)}
          placeholder="Enter ingredient"
        />
        <button className="search-submit-button" type="submit">Submit</button>
      </form>
      
      <div className="search-results-container">
        {searchResultsData.drinks && searchResultsData.drinks.length > 0 ? (
          <div className='search-results'>
            <div className='search-results-query'> Showing results for "{searchDisplay}"</div>
            <div className='search-results-grid'>
              {searchResultsData.drinks.map((drink, index) => (
                <div className='search-results-grid-item' key={drink.idDrink} onClick={() => goToGridItem(index)}>
                    <img className='detail-image' src={drink.strDrinkThumb}></img>
                    <h2 className='drink-name'>{drink.strDrink}</h2>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // <h2>Loading Cocktails - REPLACE THIS EVENTUALLY</h2>
          null
        )}
      </div>
    </div>
  );
}
