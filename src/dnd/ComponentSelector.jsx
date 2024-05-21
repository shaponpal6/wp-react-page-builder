import React, { useEffect, useState, useRef, memo } from 'react';
import { updateScreenData } from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import WpMediaUploader from "../Components/WpMediaUploader";
import InputComponent from '../Components/InputComponent';
import { COMPONENTS_TYPE as TYPE } from "./constants";


function ComponentSelector({ component, openMediaUploader, setIsOpen }) {
  const inputRef = useRef(null);
  const store = useSelector((state) => state.screen);
  const newData = store.data.bl_screen_data.filter((item) => item.id === component.id)[0] ?? {};
  const [row, setRow] = useState({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRow(newData ?? {});
  }, [newData])

  const handleInput = (e) => {
    if(e.target.name && e.target.name !=="") {
      setRow({ ...newData, data: { ...row.data || {}, [e.target.name]: e.target.value } });
    }
  }

  const handleCloceModel = (e) => {
    e.preventDefault();
    setIsOpen(false);
    return dispatch(updateScreenData(row));
  };

  const handleMediaUploader = (e) => {
    e.preventDefault();
    setIsOpen(false);
    dispatch(updateScreenData(row));
    return openMediaUploader();
  };

  return (
    <div className="component-item-container">

        {row?.component && row?.component?.items && row?.component?.items.length ? (
          row?.component?.items.map((item, index) => {
            return (
              <div className="component-items" key={"component-"+index}>
                
                {[TYPE.text, TYPE.url, TYPE.yt_url, TYPE.video_url, TYPE.map_url].includes(item.type) && (
                  <InputComponent
                    key={item.id}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter text here..."
                    value={row?.data[item.key] ?? ""}
                    // focus={true}
                    onChange={handleInput}
                  />
                )}

                {item.type === TYPE.media && (
                  <WpMediaUploader
                    key={item.id}
                    open={handleMediaUploader}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter text here..."
                  />
                )}

                {item.type === TYPE.yt_url && (
                  <InputComponent
                    key={item.id}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter text here..."
                    value={row?.data[item.key] ?? ""}
                    // focus={true}
                    onChange={handleInput}
                  />
                )}
              </div>
            );
          })
        ) : (<p>No items</p>)}
        
        <button class="bottom-right-corner" onClick={handleCloceModel}>Save</button>
    </div>
  );
}

export default memo(ComponentSelector);
