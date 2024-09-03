

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import '../../css/comment.css'; // Import the CSS file

const Comment = ({ name, text, time }) => {
  return (
    <div className="comment-container">
      {/* <img src= 'https://via.placeholder.com/40' alt="avatar" className="avatar" /> */}
      <div className="comment-content">
        <div className="comment-header">
          <span className="username">{name}</span>
          <span className="time">{time}</span>
        </div>
        <div className="comment-text">{text}</div>
      </div>
    </div>
  );
};


export default Comment;
