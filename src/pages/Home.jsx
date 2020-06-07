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
            console.log(this.state);
        });
    }
    componentDidUpdate() { }

    handleSubmit = async (searchValue) => {
        const videos = await serviceTube.query(searchValue);
        this.setState({ videos });
    };

    render() {
        const { videos } = this.state;

        return (
            <main className="main-home flex column align-center">
                <Searcher handleSubmit={this.handleSubmit} />
                <section className="home-video-content flex align-start space-between">
                    {videos && <VideoList videos={videos} />}
                    <aside className="youtube-video"></aside>
                </section>
            </main>
        );
    }
}
