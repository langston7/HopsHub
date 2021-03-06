import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
import './ReviewForm.css';

function ReviewFormModal({drinkId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button class="review-button" onClick={() => setShowModal(true)}>+</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm drinkId={drinkId}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;
