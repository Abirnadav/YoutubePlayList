import React from 'react'
// import { VideoList } from '../cmps/VideoList'
// import { VideoPreview } from '../cmps/VideoPreview'


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

                {/* <VideoList videos={videos} /> */}

            </main>
        )
    }
};