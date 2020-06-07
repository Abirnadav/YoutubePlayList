import React from "react";
import moment from "moment";

export function VideoPreview(props) {
  const { video, setCurrVideo } = props;
  return (
    <div className="video-preview-card flex ">
      <img
        onClick={() => setCurrVideo(video)}
        alt="IMG OF VIDEO"
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="video-details-container flex align-start column space-between ">
        <p onClick={() => setCurrVideo(video)} className="song-info">
          {video.snippet.title ? video.snippet.title : "NO TITLE"}
        </p>
        <span>{Math.random()}</span>

        <span>{moment(video.snippet.publishedAt).format("ll")}</span>
      </div>
    </div>
  );
}
