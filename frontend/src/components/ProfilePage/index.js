import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../store/reviewReducer';
import userReducer from "../../store/userReducer";
import { fetchUsers } from '../../store/userReducer';
import "./ProfilePage.css"

function ProfilePage(){

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const users = useSelector(state => Object.values(state.user));
  const reviews = useSelector((state) => Object.values(state.review));
  const thisUsersReviews = reviews.filter((review) => review.userId === sessionUser.id);
  const user = users.filter((user) => user.id === sessionUser.id);
  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchUsers());
  }, [dispatch])

  return(
    <div class="profile-container">
      <div class="profile-banner">
        <img src={user.profilePictureURL} alt="profile"></img>
      </div>
      <div class="profile-info">
        <div class="profile-feed recent-activity">
          <h3>Your Activity</h3>
          <div class="review-container">
            {thisUsersReviews.map((review) =>
              <div class="review-flex">
                <div class="review-inner">
                  <div class="review-inner">You recently had a {review.Drink.name} by {review.Drink.Brewery.name}</div>
                  <div class="review-comment">{review.comment}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
