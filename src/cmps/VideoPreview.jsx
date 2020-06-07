import React from 'react'

export default function VideoPreview(props) {
  const { video } = props;
  return (
    <div className="video-preview-container">
      <img src={video.src} alt="im a video" />
      <h3 className="song-info">{video.title}</h3>
    </div>
  );
}
