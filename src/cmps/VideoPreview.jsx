import React from "react";

export function VideoPreview(props) {
  const { video, setCurrVideo } = props;
  return (
    <div
      onClick={() => setCurrVideo(video)}
      className="video-preview-card flex "
    >
      <img alt="IMG OF VIDEO" src={video.snippet.thumbnails.medium.url}></img>
      <div className="video-details-container flex align-start column space-between ">
        <p className="song-info">
          {video.snippet.title ? video.snippet.title : "NO TITLE"}
        </p>

        <span>{video.snippet.publishedAt}</span>
      </div>
    </div>
  );
}
