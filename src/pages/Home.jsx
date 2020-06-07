import React from "react";
import { VideoList } from "../cmps/VideoList";
import Searcher from "../cmps/Searcher";
import serviceTube from "../services/serviceTube";
import VideoPlayer from "../cmps/VideoPlayer";
export class Home extends React.Component {
  state = {
    videos: null,
    currVideo: {
      kind: "youtube#searchResult",
      etag: "0i0TbOwlQcCWFJBu9VuvHSYCkj4",
      id: {
        kind: "youtube#video",
        videoId: "10fQOvBmwuo",
      },
      snippet: {
        publishedAt: "2020-06-07T07:04:52Z",
        channelId: "UCZG7I0fLryV0UTWqAKiZtsQ",
        title: "Maroon 5 - Memories on Harmonium",
        description: "adamlevine #memories.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/10fQOvBmwuo/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/10fQOvBmwuo/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/10fQOvBmwuo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "giriraj_06 IVT",
        liveBroadcastContent: "none",
        publishTime: "2020-06-07T07:04:52Z",
      },
    },
  };

  async componentDidMount() {
    const videos = await serviceTube.query("Maroon");

    this.setState({ videos }, () => {
      console.log(this.state);
    });
  }
  componentDidUpdate() {}

  handleSubmit = async (searchValue) => {
    const videos = await serviceTube.query(searchValue);
    this.setState({ videos });
  };

  setCurrVideo = (currVideo) => {
    console.log("setCurrVideo -> currVideo", currVideo);
    this.setState({ currVideo });
  };

  render() {
    const { videos, currVideo } = this.state;

    return (
      <main className="main-home flex column align-center">
        <h2>
          Code<span>Tube</span>
        </h2>
        <Searcher handleSubmit={this.handleSubmit} />
        <section className="home-video-content flex align-start space-evenly">
          {videos && (
            <VideoList setCurrVideo={this.setCurrVideo} videos={videos} />
          )}
          <aside className="youtube-video">
            <VideoPlayer item={currVideo}></VideoPlayer>
          </aside>
        </section>
      </main>
    );
  }
}
