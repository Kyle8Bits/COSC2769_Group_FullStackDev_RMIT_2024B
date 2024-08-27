import React, { useState } from 'react';
import Notification from './Notification';
import '../../css/notificationList.css';

function NotificationList() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      avatar: 'https://via.placeholder.com/40',
      message: 'John Doe liked your post.',
      time: '2 hours ago',
    },
    {
      id: 2,
      avatar: 'https://via.placeholder.com/40',
      message: 'Jane Smith commented on your photo.',
      time: '1 hour ago',
    },
  ]);

  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          avatar={notification.avatar}
          message={notification.message}
          time={notification.time}
        />
      ))}
    </div>
  );
}

export default NotificationList;