import React from 'react';
import Modal from 'react-modal';

const AlertModal = ( props ) => {
  const { modalIsOpen, afterOpenModal , closeModal, type, handleCancel, handleRemoveAll } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      className="modal"
    >
      <h1 className="modal__title">This will automatically remove all the { type } </h1>
      <h1 className="modal__subtitle"> Would you like to continue? </h1>
      <div className="modal__btn-box">
        <button
          className="btn btn--modal" 
          onClick={handleRemoveAll}> 
          Remove All 
        </button>
        <button
          className="btn btn--modal btn--modal-cancel" 
          onClick={handleCancel}> 
          Cancel 
        </button>
    </div>
  </Modal>

  )
}

export default AlertModal;