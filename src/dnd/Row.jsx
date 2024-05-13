import React, { useRef, useState, useEffect } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import DropZone from "./DropZone";
import Column from "./Column";
import ComponentModal from "./ComponentModal";
import {fetchScreenData} from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import {removeScreenData} from "../store/actions/screen";

const style = {};
const Row = ({ data, components, handleDrop, path, handleDropToTrashBin }) => {
  const ref = useRef(null);
  const [input, setInputValue]= useState('');
  const dispatch = useAppDispatch();
  const store = useSelector((state) => state.screen);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ROW,
      id: data.id,
      children: data.children,
      path
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const renderColumn = (column, currentPath) => {
    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
      />
    );
  };

  // Function to parse URL parameters
  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

  const handleInput = (e) => {
    setInputValue(e.target.value);
    // addTodoAction(33);
    // dispatch(updateScreenData({"key2": e.target.value}));
  }

  const handleDelete = (data) => {
    dispatch(removeScreenData(data));
  }



  return (
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      {/* {data.id} */}
      <div className="columns component-wrapper">
        <div class="corner-elements">
            <span class="icon save-icon"><ComponentModal component={data}/></span>
            <span class="icon trash-icon" onClick={()=>handleDelete(data)}>&#10539;</span>
        </div>
        
        {/* <input type="text" className="" placeholder="Enter text" onChange={handleInput} /> */}
        <h4>{data.val ?? "..."}</h4>
      </div>
      
      {/* <div className="columns">
        {data.children.map((column, index) => {
          const currentPath = `${path}-${index}`;

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
              />
              {renderColumn(column, currentPath)}
            </React.Fragment>
          );
        })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
        />
      </div> */}
    </div>
  );
};
export default Row;
