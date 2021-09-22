import { useState } from "react";
import React from "react";

function Likes () {
    const[likes, setLikes]= useState(0);
    const[dislikes, setDislikes]= useState(0);


    return(
        <div className="likes">
            <h1>{dislikes}</h1>
            <div className="button-wrapper">
                <i class="small material-icons" onClick={()=>setDislikes(dislikes + 1)}>thumb_down</i>
                <h1>{likes}</h1>

                <i class="small material-icons" onClick={()=>setLikes(likes + 1)}>thumb_up</i>
                
            </div>

        </div>

    )
}

export default Likes;