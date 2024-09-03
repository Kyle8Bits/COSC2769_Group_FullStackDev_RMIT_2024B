import React from 'react';
import '../../css/comment.css'; // Import the CSS file
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../redux/slice/adminSlice';

const Comment = ({ user, text, time, commentId, postId }) => {
  const dispatch = useDispatch();
  const isAdmin = useSelector(state => state.profile.isAdmin);
  
  const handleDeleteComment = () => {
    if (commentId && postId) {
      dispatch(deleteComment({ postId, commentId }));
      console.log("Deleting Comment ID: ", commentId);
    } else {
      console.error("Comment ID or Post ID is undefined");
    }  }
  
  return (
    <div className="comment-container">
      <img src={user.avatar} alt="avatar" className="avatar" />
      <div className="comment-content">
        <div className="comment-header">
          <span className="username">{user.name}</span>
          {isAdmin && <div className='delete_comment_button' onClick={handleDeleteComment}>
                Delete Comment
            </div>}
          <span className="time">{time}</span>
        </div>
        <div className="comment-text">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
