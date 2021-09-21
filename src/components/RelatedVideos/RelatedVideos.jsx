import React from 'react';


const RelatedVideos = (props) => {
    return(
        <React.Fragment>
            <div className="related-videos">
                {console.log("Props Search Return List: ", props.searchReturnList)}
                {/* <div className="card">
                    <button>
                        <img src={props.searchReturnList.items[1].snippet.thumbnails.default.url} alt="thumbnail"/>
                        <p>{props.searchReturnList.items[1].snippet.title}</p>
                    </button>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export default RelatedVideos;
                // <div className="card">
                //     <button>
                //         <img src={props.searchReturnList.items[2].snippet.thumbnails.default.url} alt="thumbnail"/>
                //         <p>{props.searchReturnList.items[2].snippet.title}</p>
                //     </button>
                // </div>
                // <div className="card">
                //     <button>
                //         <img src={props.searchReturnList.items[3].snippet.thumbnails.default.url} alt="thumbnail"/>
                //         <p>{props.searchReturnList.items[3].snippet.title}</p>
                //     </button>
                // </div>
                // <div className="card">
                //     <button>
                //         <img src={props.searchReturnList.items[4].snippet.thumbnails.default.url} alt="thumbnail"/>
                //         <p>{props.searchReturnList.items[4].snippet.title}</p>
                //     </button>
                // </div>