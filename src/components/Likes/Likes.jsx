import { useState } from "react";
import React from "react";

function Likes () {
    const[likes, setLikes]= useState(0);
    const[dislikes, setDislikes]= useState(0);


    return(
        <div className="btn-group" role="group">
            <h6>{dislikes}</h6>
            <div className="button-wrapper">
                <i class="tiny material-icons" onClick={()=>setDislikes(dislikes + 1)}>thumb_down</i>
                <div className="btn-group" role="group">
                    <h6>{likes}</h6>
                </div>
                <i class="tiny material-icons" onClick={()=>setLikes(likes + 1)}>thumb_up</i>
            </div>

        </div>

    )
}

export default Likes;