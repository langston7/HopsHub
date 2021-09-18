import { csrfFetch } from "./csrf";

const GET_REVIEWS = 'review/getReviews';
const ADD_REVIEW = 'review/addReview';

export const getReviews = (reviews) => {
  return { type: GET_REVIEWS, reviews };
};

export const addReview = (review) => {
  return { type: ADD_REVIEW, review };
}

export const fetchReviews = () => async (dispatch) => {
  const response = await csrfFetch('/api/reviews');
  const reviews = await response.json();
  dispatch(getReviews(reviews));
};

export const addOneReview = (review) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  })

  if(response.ok) {
    const newReview = await response.json();
    dispatch(addOneReview(newReview));
  }
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  const newEntries = {...state};
  switch (action.type) {
    case GET_REVIEWS:
      action.reviews.forEach((review) => {
        newEntries[review.id] = review;
      });
      return newEntries;
    case ADD_REVIEW:
      newEntries[action.review.id] = action.review;
      return newEntries;
    default:
      return state;
  }
};

export default reviewReducer;
