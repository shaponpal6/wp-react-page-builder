import React, { memo } from 'react';
import VideoPlayer from "../Components/VideoPlayer";
import { COMPONENTS_TYPE as TYPE } from "./constants";
import ImageCarousel from '../Components/ImageCarousel';
import CardComponent from '../Components/CardComponent';
import GoogleMapIframe from '../Components/GoogleMapIframe';

function ComponentViewer({ row }) {
  console.log('@@row',row, row?.component?.items)
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
                {item.type === TYPE.editor && (
                  <div className="component-input">
                      <label>{item?.title || "Value"}:</label>
                      <div dangerouslySetInnerHTML={{ __html: row?.data[item.key] ?? "" }}></div>
                  </div>
                )}
                {item.type === TYPE.yt_url && (
                  <div className="component-input">
                      {/* <label>{item?.title || "Value"}:</label> */}
                      <VideoPlayer url={row?.data[item.key] ?? ""} />
                  </div>
                )}

                {[TYPE.single_image, TYPE.multiple_images, TYPE.media].includes(item.type) && (
                  <div class="image-container">
                    {row?.data[item.key] && row?.data[item.key].length && row?.data[item.key].map((image, index) => (
                      <img key={index} src={image.url || ""} alt={`Image ${index}`} width={150} />
                    ))}
                    {/* {row?.data[item.key] && row?.data[item.key].length && <ImageCarousel images={row?.data[item.key]}/>} */}
                  </div>
                )}
                {[TYPE.single_video, TYPE.multiple_videos].includes(item.type) && (
                  <div class="image-container">
                    {row?.data[item.key] && row?.data[item.key].length && row?.data[item.key].map((video, index) => (
                      <VideoPlayer key={index}  url={video.url || ""} type="all"/>
                    ))}
                  </div>
                )}
                {item.type === TYPE.single_product && (
                  <div className="component-input">
                      <label>{item?.title || "Value"}:</label>
                      {/* <h4>{row?.data[item.key] ? JSON.stringify(row?.data[item.key]) : "No product"}</h4> */}
                      <div style={{ width: '100%', marginTop: '10px', height: 'auto' }}>
                        <CardComponent products={row?.data[item.key] ? [row?.data[item.key]] : []}/>
                      </div>
                  </div>
                )}
                {item.type === TYPE.seperator && (
                  <div className="component-input">
                      <hr style={{height: '10px'}}/>
                  </div>
                )}
                {item.type === TYPE.map_url && (
                  <div className="component-input">
                      <label>{item?.title || "Value"}:</label>
                      {/* <h4>{row?.data[item.key] ? JSON.stringify(row?.data[item.key]) : "No product"}</h4> */}
                      <div style={{ width: '100%', marginTop: '10px', height: 'auto' }}>
                        {/* <GoogleMapIframe lat="23.8062954" lng="90.359395" mapUrl2={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.345916059077!2d90.35939497479366!3d23.80629538662922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1885844865b%3A0xc8ed20ea62207f8a!2sTiger&#39;s%20Den!5e0!3m2!1sen!2sbd!4v1716723365450!5m2!1sen!2sbd"}/> */}
                        {/* <iframe src={row?.data[item.key] || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.345916059077!2d90.35939497479366!3d23.80629538662922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1885844865b%3A0xc8ed20ea62207f8a!2sTiger&#39;s%20Den!5e0!3m2!1sen!2sbd!4v1716723365450!5m2!1sen!2sbd"} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.345916059077!2d90.35939497479366!3d23.80629538662922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1885844865b%3A0xc8ed20ea62207f8a!2sTiger&#39;s%20Den!5e0!3m2!1sen!2sbd!4v1716723365450!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                      </div>
                  </div>
                )}

                {item.type === TYPE.multi_product && (
                  <div class="product-container">
                    <label>{item?.title || "Value"}:</label>
                    {/* {row?.data[item.key] && row?.data[item.key].length && row?.data[item.key].map((item, index) => (
                      <div className="component-input" key={index}>
                          <h4>{item?.name || "Value"}:</h4>
                          <p>{item ? JSON.stringify(item) : "No product"}</p>
                      </div>
                    ))} */}
                    <div style={{ width: '100%', marginTop: '10px', height: 'auto' }}>
                      <CardComponent products={row?.data[item.key] && row?.data[item.key]}/>
                    </div>
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
