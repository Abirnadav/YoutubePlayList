import React, { Component } from "react";

export default class VideoPlayer extends Component {
  render() {
    return (
      <>
        <iframe
          className="flex column"
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.item.id.videoId}`}
        ></iframe>

        <h3>{this.props.item.snippet.title}</h3>
      </>
    );
  }
}
