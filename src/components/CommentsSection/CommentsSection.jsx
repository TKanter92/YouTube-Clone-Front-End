import React, { Component } from 'react';
import './CommentsSection.css';

class CommentsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // this.props. // come up with new name for props //
    }


    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="leftcolumn">
                        <div class="card">
                            <div>
                                <h4>Comments</h4>
                            </div>
                            <div class="leavecomment">
                                <label for="comment" className="comment">Leave A Comment</label>
                                <input />
                                <button />
                            </div>
                            <div>
                                <p>Video comments</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </React.Fragment>
        );
    }
}

export default CommentsSection;