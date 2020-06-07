import React from 'react'
import VideoPreview from "../cmps/VideoPreview.jsx";

export default function VideoList(props) {

  console.log(props.videos);
  return (
    <div className="video-list">
      {props.videos.map((video, idx) => (
        <VideoPreview key={idx} video={video} />
      ))}
    </div>
  );
}
