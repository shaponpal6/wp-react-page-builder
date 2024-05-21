import React, {useState, memo} from 'react';
import Modal from 'react-modal';
import ComponentSelector from './ComponentSelector';

const customStyles = {
  content: {
    width: '50%',
    height: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#bl-react-page-builder');

function ComponentModal({ component, openMediaUploader }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className='save-icon'>&#9998;</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Component"
        className="modal"
        overlayClassName="overlay"
      >
        <button class="top-right-corner" onClick={closeModal}><span class="icon trash-icon">&#10539;</span></button>
        <ComponentSelector component={component} openMediaUploader={openMediaUploader} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}

export default memo(ComponentModal);
