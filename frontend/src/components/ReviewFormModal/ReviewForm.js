import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { addOneReview } from "../../store/reviewReducer";
import "./ReviewForm.css"

function ReviewForm({drinkId}) {
  const sessionUser = useSelector(state => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState();
  const [errors, setErrors] = useState([]);
  const userId = sessionUser.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    console.log("HELLO");

    const payload = {
      comment,
      userId,
      drinkId,
    }

    await dispatch(addOneReview(payload))
    history.push('/thepub');
  };

  return (
    <div class="review-form-container">
      <h3>Drink Review</h3>
      <form id="review-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          class="review-input"
          type="text"
          placeholder="What did you think?"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button class="review-submit-button" type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default ReviewForm;
