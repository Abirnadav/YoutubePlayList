import React from 'react'
// import { VideoList } from '../cmps/VideoList'
// import { VideoPreview } from '../cmps/VideoPreview'
import serviceTube from '../services/serviceTube'


export class Home extends React.Component {

    state = {
        videos: null
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