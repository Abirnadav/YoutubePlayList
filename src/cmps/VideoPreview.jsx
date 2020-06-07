import React from "react";

export function VideoPreview(props) {
  const { video } = props;
  return (
    <div class="video-preview-card">
      <h3 class="song-info">{video.title ? video.title : "NO TITLE"}</h3>
      <img
        src={
          video.src ? video.src : "https://www.youtube.com/watch?v=EvCyJ8WfFEs"
        }
        alt="im a video"
      />
    </div>
  );
}
