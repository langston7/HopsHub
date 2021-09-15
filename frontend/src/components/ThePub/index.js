import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../store/reviewReducer';
import { fetchDrinks } from '../../store/drinkReducer';
import './ThePub.css'

function ThePub(){

  const dispatch = useDispatch();
  const reviews = useSelector((state) => Object.values(state.review));
  const drinks = useSelector((state) => Object.values(state.drink));

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchDrinks());
  }, [dispatch])

  return (
    <div class="pub-container">
      <div class="pub-inner">
        <div class="recent-activity">
          <h2 class="recent-activity-header">Recent Global Activity</h2>
          <div class="divider"></div>
          <div class="review-container">
            {reviews.map((review) =>
              <div class="review-flex">
                <img src={review.User.profilePictureURL} alt="profile pic" class="profile-picture"/>
                <div class="review-inner">
                  <h3>{review.User.username} is drinking a {review.Drink.name}</h3>
                  <p>{review.comment}</p>
                  <img alt="upload"></img>
                </div>
              </div>
            )}
          </div>
        </div>
        <div class="trending-beers">
          <h2>Trending Beers</h2>
          <div class="divider"></div>
          <div class="beers-list">
            {drinks.map((beer) =>
              <div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default ThePub;
