import React from 'react'
// import { VideoList } from '../cmps/VideoList'
// import { VideoPreview } from '../cmps/VideoPreview'
import serviceTube from '../services/serviceTube'


export class Home extends React.Component {

    state = {
        videos: null
    };

    componentDidMount() {
        this.setState({videos:serviceTube.query('hello')},()=>{
            console.log(this.state.videos);
            
        })

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