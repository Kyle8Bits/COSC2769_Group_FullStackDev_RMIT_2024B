import React from 'react';
import '../../css/notification.css';

function Notification({ avatar, message, time }) {
  return (
    <div className="notification">
      <img src={avatar} alt="avatar" className="notification-avatar" />
      <div className="notification-content">
        <p>{message}</p>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Notification;
