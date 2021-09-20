import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import DisplayVideosList from './DisplayVideosList/DisplayVideosList';
import VideoPlayer from './VideoPlayer/VideoPlayer';


class App extends Component {
    constructor () {
        super ();
        this.state = {
            videosList: [],
            selectedVideo: null,
            videoId: undefined
        }
    }

    componentDidMount() {
        this.getAllVideos();
    }

    async getAllVideos () {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=&key=AIzaSyDGT2wmYNwgjpSZBLsHbZ7PKbo1Qw99fsA&part=snippet&type=video&maxResults=5')
        //TODO: when getting a successful response from the video search, also set the selectedVideo state variable to one of the items in the "kind" array
        console.log(response.data.items[0].id.videoId)
        this.setState({
            videosList: response.data,
            selectedVideo: response.data.items[0].id.videoId
        });
    }

    videoToPlay = (video) => {
        this.setState({
            videoId: video
        });
    }

    getVideoDetail = async (videoId) => {
        await axios.get(`https://www.googleapis.com/youtube/v3/search?q=&key=AIzaSyDGT2wmYNwgjpSZBLsHbZ7PKbo1Qw99fsA${videoId}`);
        this.getAllVideos()
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <TitleBar />
                <DisplayVideosList listVideos={this.state.videosList}/>
                <VideoPlayer videoId={this.state.selectedVideo} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;