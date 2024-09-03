
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import these hooks from Redux
import { fetchCommentsForPost, addCommentToPost } from "../../redux/slice/commentsSlice"; // Ensure you have these actions imported
import Comment from "./Comment"; // Import the Comment component
import "../../css/commentBox.css";// Import your CSS file

function CommentBox({ postId, currentUser, actionLeft }) { // Accept postId as a prop
    const comments = useSelector((state) => state.comment.commentList);
    const dispatch = useDispatch();
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
                authorUsername: currentUser.username,
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
                    <i onClick={actionLeft} className="ri-arrow-left-line"></i>
                </div>
                <h1 className="comment-title">COMMENTS</h1>
                <div className="comments-container">
                    {comments && comments.map((comment) => (
                        <Comment key={comment._id} commentId = {comment._id} postId = {postId} username= { comment.authorUsername} name={comment.author} text={comment.content} />
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
