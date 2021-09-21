import { useState } from "react";
import React from "react";

function Likes () {
    const[count, setCount]= useState(0);


    return(
        <div className="likes">
            <h1>{count}</h1>
            <div className="button-wrapper">
                <i class="material-icons" onClick={()=>setCount(count - 1)}>thumb_down</i>
                <i class="material-icons" onClick={()=>setCount(count + 1)}>thumb_up</i>
                
            </div>

        </div>

    )
}

export default Likes;