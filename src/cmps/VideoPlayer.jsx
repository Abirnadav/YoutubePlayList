import React, { Component } from "react";

export default class VideoPlayer extends Component {
  render() {
    return (
      <iframe
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${this.props.item.id.videoId}`}
      ></iframe>
    );
  }
}
