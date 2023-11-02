import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DataContext from '../../DataContext'
import { NAME_BASE_URL } from '../../../globals'
import '../../CocktailSearch.css' 

export default function CocktailsData() {
  
  const { cocktailDetailData, setCocktailDetailData, searchResultsData, setSearchResultsData, searchDisplay, setSearchDisplay } = useContext(DataContext);
  const navigate = useNavigate();

  const [searchName, setSearchName] = useState('');

  const GetCocktailbyName = async (name) => {
    try {
      const response = await axios.get(`${NAME_BASE_URL}${name}`);
      setSearchResultsData(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchName) {
      setSearchDisplay(searchName)
      GetCocktailbyName(searchName);
    }
  }

  const goToGridItem = (index) => {
    setCocktailDetailData(searchResultsData.drinks[index])
    navigate('/cocktaildetails');
  }

  return (
    <div className="Cocktails">
      <h2 className="title">Cocktail Search Index</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='search-input'
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter cocktail name"
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
                    <h2 ClassName='drink-name'>{drink.strDrink}</h2>
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
