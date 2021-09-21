import React from 'react';


const VideoPlayer = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="videoplayer">
                    <iframe id="player" title="videoplayer" type="text/html" width="720" height="380"
                        src={(`http://www.youtube.com/embed/${props.videoId}/`)}
                        frameBorder="0">
                    </iframe>
                    <div className="title-and-description">
                        <h3>{props.videoTitle}</h3>
                        <p>{props.videoDescription}</p>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )
}

export default VideoPlayer;