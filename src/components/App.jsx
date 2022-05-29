import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Footer from './Footer/Footer';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
// import CommentsSection from './CommentsSection/CommentsSection';
import CommentSection from './CommentsSection/CommentsSection';
import Likes from './Likes/Likes';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import Replies from './Replies/Replies';
import ReviewForm from './ReviewForm/ReviewForm';
import Home from './Home/Home';



class App extends Component {
    constructor () {
        super ();
        this.state = {
            videosList: [],
            searchedVideosList: [],
            selectedVideo: null,
            videoId: undefined,
            searchTerm: undefined,
            videoTitle: undefined,
            videoDescription: undefined,
            videoThumbnail: [],
            comment_text:[],
        }
    }

    componentDidMount() {
        this.getAllVideos();
    }

    async getAllVideos () {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyDGT2wmYNwgjpSZBLsHbZ7PKbo1Qw99fsA&part=snippet&type=video&maxResults=5')
        {console.log(response.data.items[0].snippet.thumbnails.medium.url)}
        this.setState({
            videosList: response.data,
            selectedVideo: response.data.items[0].id.videoId,
            videoTitle: response.data.items[0].snippet.title,
            videoDescription: response.data.items[0].snippet.description,
        });
    }

    videoToPlay = (video) => {
        this.setState({
            videoId: video
        });
    }

    relatedVideosDisplay = async (index) => {
        let result = await axios.get('https://www.googleapis.com/youtube/v3/search?q=dogs&key=AIzaSyDGT2wmYNwgjpSZBLsHbZ7PKbo1Qw99fsA&part=snippet&type=video&maxResults=5')
        this.setState({
            videoThumbnail: result.data.items[index].snippet.thumbnails.medium.url
        });
    }

    getVideosBySearch = async (searchCriteria) => {
        console.log("searching criteria",searchCriteria)
        let search = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchCriteria}&key=AIzaSyCdCOmaGNt556mi1fOP-wU0GdVxWTLvDvg&part=snippet&type=video&maxResults=5`);
        console.log("Search Data: ", search.data.items)
        this.setState({
            searchTerm: searchCriteria,
            searchedVideosList: search.data.items,
            selectedVideo: search.data.items[0].id.videoId,
            videoTitle: search.data.items[0].snippet.title,
            videoDescription: search.data.items[0].snippet.description,
        });
    }
   
    render() {
        console.log(this.state)
        return (
            <Routes>

                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="leftcolumn">
                                <TitleBar />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="centercolumn">
                                <SearchBar searchForVideos={this.getVideosBySearch}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="rightcolumn">

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card">
                            <div className="leftcolumn">
                                <div className="col-md-8">
                                    <VideoPlayer videoId={this.state.selectedVideo} videoTitle={this.state.videoTitle} videoDescription={this.state.videoDescription}/>
                                    <CommentSection videoId={this.state.selectedVideo}/>
                                    <Likes />
                                    <Replies commentId={this.state.comment_text}/>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="rightcolumn">
                                <div className="col-md-4">
                                    <RelatedVideos displayVideoRelated={this.relatedVideosDisplay} relatedSearchVideos={this.getVideosBySearch} searchReturnList={this.state.searchedVideosList} relatedOnStart={this.getAllVideos} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="card">
                            <div className="row">
                                <div className="footer" align="center">
                                    <Footer />
                               
                               
                                    <Route path='/details' element={<ProductDetails />} render={props => <ProductDetails {...props} details={this.state.products} />} />
                                    <Route path='/review'  element={<ReviewForm />} render={props => <ReviewForm {...props} review={this.state.products} />} />
                               
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <Route path='/' element={<TitleBar />} />       */}
                <Route path='/' element={<Home />} />      

                <Route path='/' element={<SearchBar />} searchForVideos={this.getVideosBySearch}></Route>
                <Route path='/' element={<VideoPlayer />} videoId={this.state.selectedVideo} videoTitle={this.state.videoTitle} videoDescription={this.state.videoDescription}></Route>                                     
                <Route path='/home' element={<CommentSection />} videoId={this.state.selectedVideo}></Route>                
                <Route path='/home' element={<Likes />} />          
                <Route path='/' element={<Replies />} commentId={this.state.comment_text}></Route>
                <Route path='/home' element={<RelatedVideos />} displayVideoRelated={this.relatedVideosDisplay} relatedSearchVideos={this.getVideosBySearch} searchReturnList={this.state.searchedVideosList} relatedOnStart={this.getAllVideos} ></Route>
                <Route path='/review'  element={<ReviewForm />} render={props => <ReviewForm {...props} review={this.state.products} />} />
                <Route path='/home' element={<Footer />} />      
   
            </Routes>
        );
    }
}

export default App;