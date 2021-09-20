import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, deleteOneReview } from '../../store/reviewReducer';
import { fetchUsers } from '../../store/userReducer';
import EditReviewFormModal from "../ReviewFormModal/EditIndex";
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


  const handleDelete = (reviewId) => async (e) => {
    e.preventDefault();

    const payload = {
      reviewId
    }

    await dispatch(deleteOneReview(payload));
  }

  return(
    <div class="profile-container">
      <div class="profile-banner">
        <div class="profile-banner-inner">
          <img class="profile-picture" src={user[0]?.profilePictureURL} alt="profile"></img>
          <div class="profile-user-stats">
            <p class="xname">{user[0]?.username}</p>
            <p>Reviews: {thisUsersReviews?.length}</p>
          </div>
        </div>
      </div>
      <div class="pub-container">
      <div class="pub-inner">
        <div class="recent-activity">
          <h2 class="recent-activity-header">Your Activity</h2>
          <div class="divider"></div>
          <div class="review-container">
            {thisUsersReviews.map((review) =>
              <div class="review-flex">
                <div class="drink-image-container">
                  <img src={review.Drink.imageURL} alt="profile pic" class="drink-image"/>
                </div>
                <div class="review-inner">
                  <h3>You had a {review.Drink.name} by {review.Drink.Brewery.name}</h3>
                  <p>{review.comment}</p>
                </div>
                <div class="alter-review-button-container">
                  <EditReviewFormModal reviewId={review.id} oldComment={review.comment}/>
                  <button class="alter-review-button" onClick={handleDelete(review.id)}>Delete this post</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default ProfilePage;
