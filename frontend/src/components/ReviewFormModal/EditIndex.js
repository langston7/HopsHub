import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';
import './ReviewForm.css';

function EditReviewFormModal({reviewId, oldComment}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button class="alter-review-button" onClick={() => setShowModal(true)}>Edit this post</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm reviewId={reviewId} oldComment={oldComment}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;
