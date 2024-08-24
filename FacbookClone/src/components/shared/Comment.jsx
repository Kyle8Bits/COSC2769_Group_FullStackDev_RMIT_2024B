import React from 'react';
import '../../css/comment.css'; // Import the CSS file

const Comment = ({ user, text, time }) => {
  return (
    <div className="comment-container">
      <img src={user.avatar} alt="avatar" className="avatar" />
      <div className="comment-content">
        <div className="comment-header">
          <span className="username">{user.name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="comment-text">{text}</div>
      </div>
    </div>
  );
};

export default Comment;
