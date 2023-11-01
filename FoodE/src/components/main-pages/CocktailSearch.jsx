import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataContext from '../../DataContext';
import { NAME_BASE_URL } from '../../../globals';

export default function CocktailsData() {
  const { cocktailDetailData, setCocktailDetailData, searchResultsData, setSearchResultsData } = useContext(DataContext);

  const [cocktailName, setCocktailName] = useState('');

  const GetCocktailbyName = async (name) => {
    try {
      const response = await axios.get(`${NAME_BASE_URL}${name}`);
      setSearchResultsData(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cocktailName) {
      GetCocktailbyName(cocktailName);
      navigate('/cocktaildetails');
    }
  }

  return (
    <div className="Cocktails">
      <h1 className="title">Cocktail Search Index</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={cocktailName}
          onChange={(e) => setCocktailName(e.target.value)}
          placeholder="Enter cocktail name"
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {searchResultsData.drinks && searchResultsData.drinks.length > 0 ? (
          <div>
            {searchResultsData.drinks.map((drink) => (
              <h2 key={drink.idDrink}>{drink.strDrink}</h2>
            ))}
          </div>
        ) : (
          <h2>Loading Cocktails</h2>
        )}
      </div>
    </div>
  );
}
