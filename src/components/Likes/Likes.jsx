import { useState } from "react";
import React from "react";

function Likes () {
    const[count, setCount]= useState(0);


    return(
        <div className="likes">
            <h1>{count}</h1>
            <div className="button-wrapper">
                <button onClick={()=>setCount(count - 1)}>-</button>
                <button onClick={()=>setCount(count + 1)}>+</button>

            </div>

        </div>

    )
}

export default Likes;