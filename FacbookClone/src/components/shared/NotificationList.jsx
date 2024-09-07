import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchNotifications } from '../../redux/slice/notificationSlice';
import Notification from './Notification';
import '../../css/notificationList.css';

function NotificationList() {

  const notifications = useSelector((state) => state.notification.notifications);
  const currentUser = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      dispatch(fetchNotifications(currentUser))
    }
  },[dispatch,currentUser])
  return (
    <div className="notification-list">
      {notifications.slice().reverse().map((notification) => (
        <Notification
          key={notification._id}
          avatar={notification.avatar}  // Assuming user has an avatar field
          message={notification.message}
          time={new Date(notification.createdAt).toLocaleTimeString()}
        />
      ))}
    </div>
  );
}

export default NotificationList;
