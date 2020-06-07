import React from 'react'
import VideoList from '../cmps/VideoList'
import Searcher from '../cmps/Searcher'


export class Home extends React.Component {

    state = {
        videos: []
    };

    componentDidMount() {

    }
    componentDidUpdate() {

    }

    render() {
        
        const { videos } = this.state;

        return (
            <main className="main-home grid">
                <Searcher />
                <VideoList videos={videos} />
                <aside className="youtube-video"></aside>
            </main>
        )
    }
};