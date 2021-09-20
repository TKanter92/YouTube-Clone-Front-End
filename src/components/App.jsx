import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {
    constructor () {
        super ();
        this.state = {
            videosList: [],
            selectedVideo: null,
            videoId: undefined,
            searchTerm: undefined
        }
    }

    componentDidMount() {
        this.getAllVideos();
    }

    async getAllVideos () {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyCdCOmaGNt556mi1fOP-wU0GdVxWTLvDvg&part=snippet&type=video&maxResults=5')
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

    getVideosBySearch = async (searchCriteria) => {
        console.log(searchCriteria);
        let search = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=AIzaSyCdCOmaGNt556mi1fOP-wU0GdVxWTLvDvg&part=snippet&type=video&maxResults=5`);
        this.setState({
            searchTerm: searchCriteria,
            videosList: search.data,
            selectedVideo: search.data.items[0].id.videoId
        });
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <TitleBar />
                <SearchBar searchForVideos={this.getVideosBySearch}/>
                <VideoPlayer videoId={this.state.selectedVideo} />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;