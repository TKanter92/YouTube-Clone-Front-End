import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: null
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state.searchTerm)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchForVideos(this.state.searchTerm);
    }
    render () {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" className="video-search" name="searchTerm" value={this.state.searchTerm} />
                    <button type="submit">Search</button>
                </form>
            </React.Fragment>
        )
    }
}
export default SearchBar;