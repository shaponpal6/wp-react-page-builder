import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import YoutubePlayer from 'react-player/youtube'
import LazyPlayer from 'react-player/lazy'

const VideoPlayer = ({title="Upload Images", type='lazy', url=""}) => {
    if (url === "") return <p>No Video</p>;
    return (
        <div className="component-input">
            {type ==="lazy" && <LazyPlayer url={url} />}
            {type ==="youtube" && <YoutubePlayer url={url} />}
            {type ==="all" && <ReactPlayer url={url} />}
        </div>
    );
};

export default VideoPlayer;
