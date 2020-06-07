import React from 'react'
import VideoList from '../cmps/VideoList'
import Searcher from '../cmps/Searcher'
import serviceTube from '../services/serviceTube'

export class Home extends React.Component {

    state = {
        videos: null
    };

    async componentDidMount() {

        const videos = await serviceTube.query('Maroon');

        this.setState({ videos }, () => {
            console.log(this.state)
        });

    }
    componentDidUpdate() {

    }

    render() {

        const { videos } = this.state;

        return (
            <main className="main-home grid">
                <Searcher />
                {/* <VideoList videos={videos} /> */}
                <aside className="youtube-video"></aside>
            </main>
        )
    }
};