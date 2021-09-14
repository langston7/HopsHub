import React, { useEffect, useState } from "react";
import { searchDrinks } from '../../store/drinkReducer';
import { useDispatch, useSelector } from 'react-redux';

function Search(){

  const dispatch = useDispatch();
  const drinks = useSelector((state) => Object.values(state.drink));
  useEffect(() => {
    dispatch(searchDrinks());
  }, [dispatch])

  return(
    <div class="search-container">
      <div class="search-inner">
        <p>{drinks[1].name}</p>
      </div>
    </div>
  );

}

export default Search;
