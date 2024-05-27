import React, { useEffect, useState, useRef, memo } from 'react';
import { updateScreenData } from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import WpMediaUploader from "../Components/WpMediaUploader";
import InputComponent from '../Components/InputComponent';
import ProductSearchComponent from '../Components/ProductSearchComponent';
import { COMPONENTS_TYPE as TYPE } from "./constants";
import RichTextEditor from '../Components/RichTextEditor';


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
  const handleCustomInput = (key, value) => {
    if(key && key !=="") {
      setRow({ ...newData, data: { ...row.data || {}, [key]: value || null } });
    }
  }

  const handleCloceModel = (e) => {
    e.preventDefault();
    setIsOpen(false);
    return dispatch(updateScreenData(row));
  };

  const handleMediaUploader = (e, type=TYPE.multiple_images, key) => {
    e.preventDefault();
    const config = {
      title: 'Select Image',
      library: {
          type: 'image',
      },
      button: {
          text: 'Select'
      },
      multiple: true,
    }
    if(type === TYPE.single_image) {
      config.multiple = false;
    }
    if(type === TYPE.single_video) {
      config.multiple = false;
      config.library.type = 'video';
    }
    if(type === TYPE.multiple_videos) {
      config.multiple = true;
      config.library.type = 'video';
    }
    if(type === TYPE.media) {
      config.multiple = true;
      config.library.type = [ 'video', 'image' ];
    }
    setIsOpen(false);
    dispatch(updateScreenData(row));
    return openMediaUploader(config, key);
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

                {[TYPE.single_image, TYPE.multiple_images, TYPE.single_video, TYPE.multiple_videos, TYPE.media].includes(item.type) && (
                  <WpMediaUploader
                    key={item.id}
                    open={(e)=>handleMediaUploader(e, item.type, item.key)}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter here..."
                  />
                )}

                {item.type === TYPE.editor && (
                  <RichTextEditor
                    key={item.id}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter here..."
                    content={row?.data[item.key] ?? ""} 
                    onChange={handleCustomInput} 
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

                {item.type === TYPE.single_product && (
                  <ProductSearchComponent
                    key={item.id}
                    isMulti={false}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter text here..."
                    value={row?.data[item.key] ?? ""}
                    // focus={true}
                    onChange={handleCustomInput}
                  />
                )}

                {item.type === TYPE.multi_product && (
                  <ProductSearchComponent
                    key={item.id}
                    isMulti={true}
                    name={item.key}
                    ref={inputRef}
                    style={{ background: '#f6f6f6' }}
                    title={item.title}
                    placeholder="Enter text here..."
                    value={row?.data[item.key] ?? ""}
                    // focus={true}
                    onChange={handleCustomInput}
                  />
                )}
                {item.type === TYPE.seperator && (
                  <hr hight={10}/>
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
