import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import DisplayVideosList from './DisplayVideosList/DisplayVideosList';


class App extends Component {
    constructor () {
        super ();
        this.state = {
            videosList: [],
            videoPlay: undefined
        }
    }

    componentDidMount() {
        this.getAllVideos();
    }

    async getAllVideos () {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=&key=AIzaSyDGT2wmYNwgjpSZBLsHbZ7PKbo1Qw99fsA')
        this.setState({
            videosList: response.data
        });
    }

    videoToPlay = (video) => {
        this.setState({
            videoPlay: video
        });
    }

    getVideoDetail = async (videoId) => {
        await axios.get(`${videoId}`);
        this.getAllVideos()
    }

    render() {
        return (
            <React.Fragment>
                <TitleBar />
                <DisplayVideosList listVideos={this.state.videosList}/>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;