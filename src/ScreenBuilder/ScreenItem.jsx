import React from "react";

const ScreenItem = ({ data }) => {
  return (
    <div className="sideBarItem">
      <h1>Hi</h1>
      {data.content}
    </div>
  );
};
export default ScreenItem;
