import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Search.css"


function Search(){

  const drinks = useSelector((state) => Object.values(state.drink));

  return(
    <div class="search-results-container">
      <div class="search-results-inner">
      {drinks.map((drink) =>
        <div>
          <div class="divider"></div>
          <img src={drink.imageURL} alt="drink" class="drink-image"></img>
          <div class="drink-info-container1">
            <h3>{drink.name}</h3>
            <div>{drink.Brewery.name}</div>
            <div>{drink.variety}</div>
          </div>
          <div class="drink-info-container2">
            <div>{drink.ibv}</div>
          </div>
        </div>
        )}

        <div class="new-beer-container">
          <div>Add a new Beer</div>
          <NavLink to="/new_drink">Click here</NavLink>
        </div>
      </div>
    </div>
  );

}

export default Search;
