import React from "react";

const ScreenItem = ({ data }) => {
  return (
    <div className="sideBarItem">
      {data.content}
    </div>
  );
};
export default ScreenItem;
