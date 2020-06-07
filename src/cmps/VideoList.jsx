import React from "react";

import { VideoPreview } from "../cmps/VideoPreview.jsx";
export function VideoList(props) {
  const { videos } = props;

  return (
    <div className="video-list-container">
      {videos.map((video, idx) => (
        <VideoPreview key={idx} video={video} />
      ))}
    </div>
  );
}
