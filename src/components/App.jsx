import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
import CommentSection from './CommentsSection/CommentsSection';
import Likes from './Likes/Likes';


class App extends Component {
    constructor () {
        super ();
        this.state = {
            videosList: [],
            selectedVideo: null,
            videoId: undefined,
            searchTerm: undefined,
            videoTitle: undefined,
            videoDescription: undefined,
            comment_text:[]
        }
    }

    componentDidMount() {
        this.getAllVideos();
    }

    async getAllVideos () {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyCdCOmaGNt556mi1fOP-wU0GdVxWTLvDvg&part=snippet&type=video&maxResults=5')
        this.setState({
            videosList: response.data,
            selectedVideo: response.data.items[0].id.videoId,
            videoTitle: response.data.items[0].snippet.title,
            videoDescription: response.data.items[0].snippet.description
        });
    }

    videoToPlay = (video) => {
        this.setState({
            videoId: video
        });
    }

    getVideosBySearch = async (searchCriteria) => {
        let search = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=AIzaSyCdCOmaGNt556mi1fOP-wU0GdVxWTLvDvg&part=snippet&type=video&maxResults=5`);
        this.setState({
            searchTerm: searchCriteria,
            videosList: search.data,
            selectedVideo: search.data.items[0].id.videoId,
            videoTitle: search.data.items[0].snippet.title,
            videoDescription: search.data.items[0].snippet.description
        });
    }

   
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <TitleBar />
                <SearchBar searchForVideos={this.getVideosBySearch}/>
                <VideoPlayer videoId={this.state.selectedVideo} videoTitle={this.state.videoTitle} videoDescription={this.state.videoDescription}/>
                <CommentSection videoId={this.state.selectedVideo}/>
                <Likes />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;