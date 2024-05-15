import React from "react";
import { useDrag } from "react-dnd";

const SideBarItem = ({ data }) => {
  // console.log('data', data)
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      <span class={data.component.icon}></span>
      <div className="sideBarItem__wraper">
        <div className="sideBarItem__name">{data.component.name}</div>
        <div className="sideBarItem__description">{data.component.content}</div>
      </div>
      {/* {data.component.name} */}
    </div>
  );
};
export default SideBarItem;
