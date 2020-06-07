import React from "react";

export function VideoPreview(props) {
  const { video } = props;
  return (
    <div className="video-preview-card">
      <h3 className="song-info">{video.title ? video.title : "NO TITLE"}</h3>

      <img alt="IMG OF VIDEO" src={video.snippet.thumbnails.medium.url}></img>
      {/* 
      <iframe
        width="250"
        height="250"
        src={
          video.src ? video.src : "https://www.youtube.com/embed/EvCyJ8WfFEs"
        }
        alt="im a video"
      /> */}
    </div>
  );
}
