import React, {useEffect, useState} from 'react';
import axios from "axios";

const Replies = (props) => {

    const [getReplies, setGetReplies]= useState({
        text: '',
        comment_id: props.commentId
    })

    const [createReply, setCreateReply]= useState([])

    useEffect(()=>{
        fetchReplies();
    },[getReplies, createReply]);

    useEffect(()=> {
    },[getReplies, createReply])

    async function fetchReplies () {
        await axios.get(`http://127.0.0.1:8000/youtube/video/${props.commentId}`)
        .then((response)=> {setCreateReply(response.data)})
        setGetReplies({
            ...getReplies,
            comment_id:props.commentId
        })
    }

    const handleChange= (event)=> {
        const newReply={
            ...getReplies,
            [event.target.name]: event.target.value
        }
        setGetReplies(newReply);
    }

    const handleSubmit= (event)=> {
        event.preventDefault()
        axios.post("http://127.0.0.1:8000/youtube/reply/video", getReplies)
    }

    console.log(createReply)
    return (
        <div className="replies">
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="text" className="form-control" onInput={handleChange} value={getReplies.text}/>
                <button type="submit" className="btn btn-dark btn-sm"> Reply</button>

            </form>
            {createReply.map((createReply)=>(
                <div>
                    {createReply.text}
                </div>
            ))}

        </div>
    ) 
    // getReplies.filter(getReplies => getReplies.commentId)

}


export default Replies

// {Replies.length > 0 && (
//     <div className= "replies">
//         {replies.map(reply => (
//             pass
//         ))}
//     </div>
// )}