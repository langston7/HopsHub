import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchDrinks } from "../../store/drinkReducer";
import "./Drinks.css"

function Drinks(){

  const dispatch = useDispatch();
  const drinks = useSelector((state) => Object.values(state.drink));

  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch]);

  return(
    <div class="all-drinks-container">
      <div class="all-drinks-inner">
      {drinks.map((drink) =>
        <div class="drink-container">
          <div class="drink-inner">
            <img src={drink?.imageURL} alt="drink" className="drink-image"></img>
            <div class="drink-info-left">
              <div class="drink-info-name">{drink?.name}</div>
              <div class="drink-info-brewery">{drink?.Brewery.name}</div>
              <div class="drink-info-variety">{drink?.variety}</div>
            </div>
            <div class="review-button-container">
              <button id="add-review-button">Open modal</button>
              <div id="add-review-modal">
                <form id="review-form">
                  <span class="close">&times;</span>
                  <label>basdf</label>
                  <input type="text"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
        )}

      </div>
    </div>
  );

}

export default Drinks;
