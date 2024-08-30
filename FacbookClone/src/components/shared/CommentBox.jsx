// import React, { useState } from "react";
// import Comment from "./Comment";

// import "./commentBox.css"




// function CommentBox(){
//     const [comments,setComments] = useState([
//         {
//             id: 1,
//             user: { name: 'John Doe', avatar: 'https://via.placeholder.com/40' },
//             text: 'This is a great post!',
//             time: '2 hours ago',
//           },
//           {
//             id: 2,
//             user: { name: 'Jane Smith', avatar: 'https://via.placeholder.com/40' },
//             text: 'Thanks for sharing!',
//             time: '1 hour ago',
//           },
//     ])

//     const [inputValue, setInputValue] = useState('');

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleAddComment = () => {
//         if (inputValue.trim() !== ''){
//             const newComment = {
//                 id: comments.length + 1,
//                 user: {name:"New User", avatar: 'https://via.placeholder.com/40'},
//                 text: inputValue,
//             };
//             setComments([...comments,newComment]);
//             setInputValue('');
//         }
//     }

//     return(
//         <div className="comment-box">
//             <h1 className="comment-title">COMMENTS</h1>
//             {comments.map((comment) => (
//                 <Comment key={comment.id} user = {comment.user} text = {comment.text}/>
//             ))}
//             <div className="input-container">
//                 <input
//                     type="text"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     placeholder="Write a comment..."/>
//                 <button onClick={handleAddComment}>POST</button>
//             </div>
//         </div>
//     );
// };

// export default CommentBox;


// Take 1

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchCommentsForPost, addCommentToPost } from "../../redux/slice/commentsSlice";
// import Comment from "./Comment";
// import "../../css/commentBox.css";

// function CommentBox({ postId }) { // Accept postId as a prop
//     const comments = useSelector((state) => state.comments);
//     const dispatch = useDispatch();
//     const currentUser = useSelector((state) => state.profile);
//     const [inputValue, setInputValue] = useState('');

//     useEffect(() => {
//         console.log("Post ID: ",postId);
//         if (postId) {
//             dispatch(fetchCommentsForPost(postId)); // Fetch comments when the component mounts
//         }
//     }, [dispatch, postId]);

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//     };

//     const handleAddComment = () => {
//         if (inputValue.trim() !== '') {
//             const newComment = {
//                 author: currentUser, // Ideally, this should be the logged-in user's ID or name
//                 content: inputValue,
//             };
//             dispatch(addCommentToPost({ postId, commentData: newComment })); // Add comment to the specific post
//             setInputValue('');
//         };
//     };

//     return (
//         <div className="popup-overlay">
//             <div className="comment-box">
//                 <div className="return_box"><i className="ri-arrow-left-line"></i></div>
//                 <h1 className="comment-title">COMMENTS</h1>
//                 <div className="comments-container">
//                     {comments && comments.map((comment) => (
//                         <Comment key={comment._id} user={comment.author} text={comment.content} />
//                     ))}
//                 </div>
//                 <div className="input-container">
//                     <input
//                         type="text"
//                         value={inputValue}
//                         onChange={handleInputChange}
//                         placeholder="Write a comment..."
//                     />
//                     <button onClick={handleAddComment}>POST</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CommentBox;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import these hooks from Redux
import { fetchCommentsForPost, addCommentToPost } from "../../redux/slice/commentsSlice"; // Ensure you have these actions imported
import Comment from "./Comment"; // Import the Comment component
import "../../css/commentBox.css";// Import your CSS file

function CommentBox({ postId }) { // Accept postId as a prop
    const comments = useSelector((state) => state.comment.commentList);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.profile);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (postId) {
            dispatch(fetchCommentsForPost(postId)); // Fetch comments when the component mounts
        }
    }, [dispatch, postId]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddComment = () => {
        if (inputValue.trim() !== '') {
            const newComment = {
                author: currentUser.fullName, // Use the logged-in user's ID or name
                content: inputValue,
            };
            dispatch(addCommentToPost({ postId, commentData: newComment })); // Add comment to the specific post
            setInputValue('');
        }
    };

    return (
        <div className="popup-overlay">
            <div className="comment-box">
                <div className="return_box">
                    <i className="ri-arrow-left-line"></i>
                </div>
                <h1 className="comment-title">COMMENTS</h1>
                <div className="comments-container">
                    {comments && comments.map((comment) => (
                        <Comment key={comment._id} user={comment.author} text={comment.content} />
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Write a comment..."
                    />
                    <button onClick={handleAddComment}>POST</button>
                </div>
            </div>
        </div>
    );
}

export default CommentBox;
