import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { fetchDrinks } from "../../store/drinkReducer";
import ReviewFormModal from "../ReviewFormModal";
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
            <div class="drink-image-container">
              <img src={drink?.imageURL} alt="drink" class="drink-image"></img>
            </div>
            <div class="drink-info-left">
              <NavLink to={`/drinks/${drink.id}`} class="drink-info-name">{drink?.name}</NavLink>
              <div class="drink-info-brewery">{drink?.Brewery.name}</div>
              <div class="drink-info-variety">{drink?.variety}</div>
            </div>
            <div class="review-button-container">
              <div id="add-review-modal">
                <ReviewFormModal drinkId={drink?.id}/>
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
