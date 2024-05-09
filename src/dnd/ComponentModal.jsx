import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#bl-react-page-builder');

function ComponentModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [input, setInputValue]= useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
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
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>Edit Component</div>
        <form>
        <input type="text" className="" placeholder="Enter text" onChange={handleInput} />
          <button>Save</button>
        </form>
      </Modal>
    </div>
  );
}

export default ComponentModal;