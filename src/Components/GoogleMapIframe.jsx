import React from 'react';

const GoogleMapIframe = ({ lat, lng, mapUrl }) => {
  const key = "AIzaSyA5Kqq1hcElOX_GFexIG94NQkt1gSP81Og";
  const defaultUrl = `https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${lng}&zoom=14`;

  const iframeSrc = mapUrl || defaultUrl;

  return (
    <div style={styles.container}>
      <iframe
        src={iframeSrc}
        style={styles.iframe}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
  },
  iframe: {
    border: 0,
    width: '100%',
    height: '100%',
  },
};

export default GoogleMapIframe;
