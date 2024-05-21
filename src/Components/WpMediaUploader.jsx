import React, { useState } from 'react';

const WpMediaUploader = ({title="Upload Images", open=null}) => {
    
    return (
        <div className="component-input">
            <label>Upload Images:</label>
            <button onClick={open ?? null}>{title}</button>
        </div>
    );
};

export default WpMediaUploader;
