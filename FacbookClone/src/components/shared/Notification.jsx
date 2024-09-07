import React from 'react';
import '../../css/notification.css';

function Notification({ avatar, message, time }) {
  return (
    <div className="notification">
       {avatar && (
        <img 
          src={`http://localhost:1414${avatar}`} 
          alt="avatar" 
          className="notification-avatar" 
        />
      )}
      <div className="notification-content">
        <p>{message}</p>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Notification;
