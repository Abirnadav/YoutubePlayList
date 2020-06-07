import React from "react";

export function VideoPreview(props) {
  const { video } = props;
  return (
    <div className="video-preview-card flex column a-center j-center">
      <h3 className="song-info">
        {video.snippet.title ? video.snippet.title : "NO TITLE"}
      </h3>

      {/* <p>{video.snippet}</p> */}
      <img alt="IMG OF VIDEO" src={video.snippet.thumbnails.medium.url}></img>
      <span>{video.snippet.publishedAt}</span>
    </div>
  );
}
