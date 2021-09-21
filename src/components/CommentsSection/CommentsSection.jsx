
import React, {useEffect, useState} from 'react';
import axios from "axios";


// const initialComments={
//     comment_text: '',

// }

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

    //     axios.get(`http://127.0.0.1:8000/youtube/video/${props.videoId}`)
    //     .then((response)=>{setComments(response.data)})
    //     setCommentData({
    //         ...commentData,
    //         video_id:props.videoId
    //     })
    // },[commentData,props.videoId])

 
    async function fetchComments () {
        await axios.get(`http://127.0.0.1:8000/youtube/video/${props.videoId}`)
        .then((response) => {setComments(response.data)})
        setCommentData({
            ...commentData,
            video_id:props.videoId
        })
        // console.log(response);
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
                // props.onSubmit(res.data)
                axios.get(`http://127.0.0.1:8000/youtube/video/${props.videoId}`)
                .then((response)=>{setComments(response.data)})
            })
            .catch(err => console.log(err));     
    };



    return (
        <div onSubmit={handleSubmit} className="commentSection">
            <form  className="form-row" >
                <input type= "text" name="comment_text" class="form-control" placeholder= "Add a comment..." onInput={handleChange} value={commentData.comment_text}/>
                <button type="submit" class="form-control" > Comment</button>

                
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
// class CommentsSection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         // this.props. // come up with new name for props //
//     }


//     render() {
//         return (
//             <React.Fragment>
//                 <div class="row">
//                     <div class="leftcolumn">
//                         <div class="card">
//                             <div>
//                                 <h4>Comments</h4>
//                             </div>
//                             <div class="leavecomment">
//                                 <label for="comment" className="comment">Leave A Comment</label>
//                                 <input />
//                                 <button />
//                             </div>
//                             <div>
//                                 <p>Video comments</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>  
//             </React.Fragment>
//         );
//     }
// }

// export default CommentsSection;