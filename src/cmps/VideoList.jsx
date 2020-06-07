import React from "react";

import { VideoPreview } from "../cmps/VideoPreview.jsx";
export function VideoList(props) {
  const { videos, setCurrVideo } = props;

  return (
    <div id="style-2" className="video-list-scroll">
      <div className="video-list-container flex align-center column">
        {videos.map((video, idx) => (
          <VideoPreview
            setCurrVideo={setCurrVideo}
            key={idx}
            idx={idx}
            video={video}
          />
        ))}
      </div>
    </div>
  );
}
