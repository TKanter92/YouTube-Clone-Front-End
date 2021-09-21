
import React, {useEffect, useState} from 'react';
import axios from "axios";


const CommentSection = (props) => {

    const [commentData, setCommentData]= useState({
        comment_text: '',
        video_id: props.videoId
    
    }
    );

    const [comments, setComments]= useState([])

    useEffect(()=>{
        fetchComments();
    }, [props.videoId]);

    useEffect(() => {
    },[commentData, comments])

 
    async function fetchComments () {
        await axios.get(`http://127.0.0.1:8000/youtube/video/${props.videoId}`)
        .then((response) => {setComments(response.data)})
        setCommentData({
            ...commentData,
            video_id:props.videoId
        })
    }

    const handleChange= (event)=> {
        const newData= {
            ...commentData, 
            [event.target.name]: event.target.value
        }
        setCommentData(newData);
    };

    
    const handleSubmit= (event)=> {
        event.preventDefault()
          axios.post("http://127.0.0.1:8000/youtube/video", commentData)
            .then(res => {
                console.log(res)
                axios.get(`http://127.0.0.1:8000/youtube/video/${props.videoId}`)
                .then((response)=>{setComments(response.data)})
            })
            .catch(err => console.log(err));     
    };



    return (
        <div className="commentSection">
            <form onSubmit={handleSubmit} className="form" width="500">
                <input type= "text" name="comment_text" className="form-control" placeholder= "Add a comment..." onInput={handleChange} value={commentData.comment_text}/>
                <button type="submit" className="btn btn-dark btn-sm float-right" > Comment</button>
            </form>
            {comments.map((comment)=>(
                <div>
                    {comment.comment_text}
                </div>
            ))}
        </div>
      );

}
 
export default CommentSection;
