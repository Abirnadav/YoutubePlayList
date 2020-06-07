import React from "react";

import { VideoPreview } from "../cmps/VideoPreview.jsx";
export function VideoList(props) {
  const videos = ["a", "2", "4"];

  return (
    <div className="video-list-container">
      IM A LIST
      {videos.map((video, idx) => (
        <VideoPreview key={idx} video={video} />
      ))}
    </div>
  );
}
