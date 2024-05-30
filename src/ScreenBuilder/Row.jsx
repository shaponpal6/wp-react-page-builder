import React, { useRef, useState, useEffect, memo } from "react";
import { useDrag } from "react-dnd";
import { ROW } from "./constants";
import UpdateComponentModal from "./UpdateComponentModal";
import { updateScreenData } from "../store/actions/screen";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store/store';
import { removeScreenData } from "../store/actions/screen";
import useWpMediaUploader from '../hooks/useWpMediaUploader';
import ComponentViewer from "./ComponentViewer";

const style = {};
const Row = ({ data, path }) => {
  const ref = useRef(null);
  const [isExpend, setIsExpend] = useState(false);
  const dispatch = useAppDispatch();
  const store = useSelector((state) => state.screen);
  const [mediaKey, images, openMediaUploader] = useWpMediaUploader();
  const [newData, setNewData] = useState({});
  const itemComponent = data?.component ?? {};
  const storeData = store.data.bl_screen_data.filter((item) => item.id === newData.id)[0] ?? {};

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

  useEffect(() => {
    setNewData({ ...data });
  }, []);

  useEffect(() => {
    if (images.length) {
      dispatch(updateScreenData({ ...storeData, data: { ...storeData.data || {}, [mediaKey]: images } }));
    }
  }, [images]);

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const handleDelete = (data) => {
    dispatch(removeScreenData(data));
  }

  return (
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      <div className="columns component-wrapper">
        <div class="corner-elements">
          <span class="icon save-icon">
            <UpdateComponentModal newData={storeData || {}} component={data} openMediaUploader={openMediaUploader} />
          </span>
          <span class="icon"><button class="trash-icon" onClick={() => handleDelete(data)}>&#10539;</button></span>
        </div>
        <div class="left-corner-elements">
          <p class="component-name"><span class={itemComponent.icon}></span> {itemComponent.name}</p>
        </div>
        <h4>{storeData?.data && storeData?.data?.text || ""}</h4>
        {/* <UpdateComponentModal newData={storeData || {}} component={data} openMediaUploader={openMediaUploader} /> */}
        {isExpend ? (
          <div class="expend-container">
            <ComponentViewer row={storeData}/>
            <div class="expend-button" onClick={() => setIsExpend(!isExpend)}>
              <span class="dashicons dashicons-arrow-up-alt2"></span>
            </div>
          </div>
        ) : (
          <div class="expend-button" onClick={() => setIsExpend(!isExpend)}>
            <span class="dashicons dashicons-arrow-down-alt2"></span>
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(Row);
