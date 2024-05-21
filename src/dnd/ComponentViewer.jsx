import React, { memo } from 'react';
import VideoPlayer from "../Components/VideoPlayer";
import { COMPONENTS_TYPE as TYPE } from "./constants";

function ComponentViewer({ row }) {
  console.log('row', row?.component?.items)
  return (
    <div className="component-item-container">

        {row?.component && row?.component?.items && row?.component?.items.length ? (
          row?.component?.items.map((item, index) => {
            return (
              <div className="component-items" key={"component-"+index}>

                {[TYPE.text, TYPE.url, TYPE.yt_url, TYPE.video_url, TYPE.map_url].includes(item.type) && (
                  <div className="component-input">
                      <label>{item?.title || "Value"}:</label>
                      <h4>{row?.data[item.key] ?? ""}</h4>
                  </div>
                )}
                {item.type === TYPE.yt_url && (
                  <div className="component-input">
                      {/* <label>{item?.title || "Value"}:</label> */}
                      <VideoPlayer url={row?.data[item.key] ?? ""} />
                  </div>
                )}

                {item.type === TYPE.media && (
                  <div class="image-container">
                    {row?.data[item.key] && row?.data[item.key].length && row?.data[item.key].map((image, index) => (
                      <img key={index} src={image.url || ""} alt={`Image ${index}`} width={150} />
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (<p>No items</p>)}
    </div>
  );
}

export default memo(ComponentViewer);
