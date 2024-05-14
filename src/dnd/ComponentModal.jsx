import React, {useEffect, useState, useCallback} from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {fetchScreenData, updateScreenData} from "../store/actions/screen";
import { useSelector } from 'react-redux';
// import { fetchData } from '../store/actions';
import { useAppDispatch } from '../store/store';
import Component from './Component';

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

function ComponentModal({component}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [input, setInputValue]= useState("");
  const [row, setRow]= useState({});
  const [data, setData]= useState(component);
  const dispatch = useAppDispatch();
  // const { loading, data: data2, error } = useSelector((state) => state);
  const store = useSelector((state) => state.screen);

  useEffect(() => {
    setInputValue(component.val ?? "");
  }, [])

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

  const handleInput = useCallback((e) => {
    setInputValue(e.target.value);
    setRow({id: component?.id ?? Date.now(), type: component?.type ?? 'text', val: input});
  }, [input])
  
  const handleSave = useCallback((e) => {
    e.preventDefault();
    setIsOpen(false);
    return dispatch(updateScreenData(row));
  }, [input]);

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
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit {component.type ?? ""} Component</h2> */}
        <button class="top-right-corner" onClick={closeModal}><span class="icon trash-icon">&#10539;</span></button>
        {/* <div>Edit Component</div> */}
        <form>
          <input type="text" className="input-box" placeholder="Enter text" onChange={handleInput} value={input} />
          <button class="bottom-right-corner" onClick={handleSave}>Save</button>
        </form>
      </Modal>
    </div>
  );
}

export default ComponentModal;