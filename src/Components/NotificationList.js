import React, { useState } from 'react';

const initialNotifications = [
  { id: 1, message: "kaponda investment posted an update...", time: "20 minutes ago", status: "urgent" },
  { id: 2, message: "New products available...", time: "50 minutes ago", status: "normal" }
];

function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification-list">
      <div className="header">
        <span>Notifications</span>
        <span className="clear" onClick={clearAllNotifications}></span>
      </div>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <div className={`icon ${notification.status}`}></div>
            <div>
              <p>{notification.message}</p>
              <span className="time">{notification.time}</span>
            </div>
            <span className="clear" onClick={() => clearNotification(notification.id)}>Clear</span>
          </li>
        ))}
      </ul>
      <div className="footer">
        <span className="clear"></span>
      </div>
    </div>
  );
}

export default NotificationList;
