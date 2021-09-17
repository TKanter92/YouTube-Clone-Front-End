import React from 'react';
import './DisplayVideosList.css';

const DisplayVideosList = (props) => {
    return (
        <React.Fragment>
            <table>
                <tbody>
                    {props.videosList.map((video) => {
                        return (
                            <tr key={video.videoId}>
                                <td>{video.kind}</td>
                                <td>{video.videoId}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default DisplayVideosList;