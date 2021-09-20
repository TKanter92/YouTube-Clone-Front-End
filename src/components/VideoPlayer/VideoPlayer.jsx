import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                        <div class="videoplayer">
                            <iframe id="player" title="videoplayer" type="text/html" width="640" height="390"
                                src={(`http://www.youtube.com/embed/${props.videoId}/`)}
                                frameborder="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )
}

export default VideoPlayer;