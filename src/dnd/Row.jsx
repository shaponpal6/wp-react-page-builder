import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import DropZone from "./DropZone";
import Column from "./Column";
import ComponentModal from "./ComponentModal";

const style = {};
const Row = ({ data, components, handleDrop, path, handleDropToTrashBin }) => {
  const ref = useRef(null);
  
  const [input, setInputValue]= useState('');

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
    console.log(e.target.value);
    setInputValue(e.target.value);
  }
  const handleSave = (e) => {
    console.log(e.target);
  }
  const handleDelete = (e) => {
    console.log(e.target);
    // handleDropToTrashBin(null, data);
  }
  function saveScreenData() {
    const screen_id = getUrlParameter('screen_id');

    // Now you can use the screen_id variable in your component
    console.log('Screen ID:', screen_id);
    console.log(wpApiSettings);
    const data = {
      "id": screen_id,
      "content": input,
      "date": Date.now(),
      "status": 1,
    }
    fetch('http://localhost/wordpress/wp-json/bl/v1/save-screen/' + screen_id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': wpApiSettings.nonce // Nonce for authentication (assuming wpApiSettings is available globally)
        },
        body: JSON.stringify(data)
    })
    .then(response => {
      console.log('response', response)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Screen data saved successfully:', data);
    })
    .catch(error => {
        console.error('Error saving screen data:', error);
    });
}


  return (
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      {/* {data.id} */}
      {/* <span class="icon save-icon" onClick={saveScreenData}>Save</span> */}
      <div className="columns component-wrapper">
        <div class="corner-elements">
            <span class="icon save-icon" onClick={saveScreenData}><ComponentModal /></span>
            <span class="icon trash-icon" onClick={handleDelete}>&#10539;</span>
        </div>
        
        <input type="text" className="" placeholder="Enter text" onChange={handleInput} />
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
