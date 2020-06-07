import React from "react";
import { VideoList } from "../cmps/VideoList";
import Searcher from "../cmps/Searcher";
import serviceTube from "../services/serviceTube";

export class Home extends React.Component {
  state = {
    videos: null,
  };

  async componentDidMount() {
    const videos = await serviceTube.query("Maroon");

    this.setState({ videos }, () => {
      console.log("DID MOUNT VIDEOS", this.state);
    });
  }
  componentDidUpdate() {}

  handleSubmit = async (searchValue) => {
    console.log("handleSubmit -> searchValue", searchValue);
    const videos = await serviceTube.query(searchValue);
    console.log("handleSubmit -> videos", videos);
    this.setState({ videos });
  };

  render() {
    const { videos } = this.state;

    return (
      <main className="main-home grid">
        <Searcher handleSubmit={this.handleSubmit} />
        {videos && <VideoList videos={videos} />}
        <aside className="youtube-video"></aside>
      </main>
    );
  }
}
