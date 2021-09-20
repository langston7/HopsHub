import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { editOneReview } from "../../store/reviewReducer";
import "./ReviewForm.css"

function EditForm({reviewId, oldComment}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState();
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const payload = {
      reviewId,
      comment,
    }

    await dispatch(editOneReview(payload));
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
          placeholder={oldComment}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button class="review-submit-button" type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default EditForm;
