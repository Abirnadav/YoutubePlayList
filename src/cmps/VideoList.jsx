import React from 'react'
import VideoPreview from "../cmps/VideoPreview.jsx";

export default function VideoList(props) {
  return (
    <div className="video-list">
      {props.videos.map((video, idx) => (
        <VideoPreview key={idx} video={video} />
      ))}
    </div>
  );
}
