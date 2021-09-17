import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
    return (
        <React.Fragment>
            <div class="row">
                <div class="leftcolumn">
                    <div class="card">
                        <div class="videoplayer">
                            <iframe id="player" title="videoplayer" type="text/html" width="640" height="390"
                                src= "http://www.youtube.com/embed/M71c1UV?enablejsapi=1&origin=http://example.com"
                                frameborder="0">
                            </iframe>
                            <h2>Video Title</h2>
                            <h4>Video Description</h4>
                        </div>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )
}

export default VideoPlayer;