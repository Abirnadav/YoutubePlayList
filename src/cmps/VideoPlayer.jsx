import React from "react";

export default function VideoPlayer(props) {
  return (
    <>
      <iframe
        className="flex column"
        width="620"
        height="415"
        src={`https://www.youtube.com/embed/${props.item.id.videoId}`}
      ></iframe>

      <h3>{props.item.snippet.title}</h3>
    </>
  );
}
