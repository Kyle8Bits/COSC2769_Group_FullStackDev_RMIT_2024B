// import React from 'react';
// import '../../css/comment.css'; 

// const Comment = ({ user, text, time }) => {
//   return (
//     <div className="comment-container">
//       <img src={user.avatar} alt="avatar" className="avatar" />
//       <div className="comment-content">
//         <div className="comment-header">
//           <span className="username">{user.name}</span>
//           <span className="time">{time}</span>
//         </div>
//         <div className="comment-text">{text}</div>
//       </div>
//     </div>
//   );
// };

// export default Comment;

import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
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

// Adding prop types for validation
Comment.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
