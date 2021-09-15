import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { searchDrinks } from '../../store/drinkReducer';
import { useDispatch, useSelector } from 'react-redux';
import "./Search.css"


function Search(){

  const dispatch = useDispatch();
  const drinks = useSelector((state) => Object.values(state.drink));

  useEffect(() => {
    dispatch(searchDrinks());
  }, [dispatch])

  return(
    <div class="search-results-container">
      <div class="search-results-inner">
      {drinks.map((drink) =>
        <div>
          <div class="divider"></div>
          <img src={drink.imageURL} alt="drink" class="drink-image"></img>
          <div class="drink-info-container1">
            <div>{drink.name}</div>
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
          <NavLink to="/new_drink"></NavLink>
        </div>
      </div>
    </div>
  );

}

export default Search;
