import React, { useState } from 'react';
import NotificationList from './NotificationList';

function NotificationBell() {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="notification-bell">
      <span onClick={toggleNotifications}>
        🔔
        <span className="badge">2</span>
      </span>
      {showNotifications && <NotificationList />}
    </div>
  );
}

export default NotificationBell;
