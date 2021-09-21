import React from 'react';
import logo from '../../Images/youtube-logo.jpg'; 



function TitleBar () {
    return (
        <div className="title-bar">
            <body>
                <div>
                    <img className="logo" src={logo} alt="YouTube" width="280px" height="100px" />
                </div>
            </body>
        </div>
    )
}

export default TitleBar;