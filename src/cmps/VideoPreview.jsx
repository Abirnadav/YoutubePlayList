import React from 'react'

export default function VideoPreview(props) {
  const { video } = props;
  return (
    <div class="video-preview-container">
      <img src={video.src} alt="im a video" />
      <h3 class="song-info">{video.title}</h3>
    </div>
  );
}
