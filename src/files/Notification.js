// src/components/Notification.js
import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = [
        {
          id: 1,
          name: 'Bipolar investments',
          message: 'posted a list of new products for sale',
          time: '23 minutes ago',
          image: 'https://via.placeholder.com/40',
          read: false,
        },
        {
          id: 2,
          name: 'Evelyn Gomez',
          message: 'created a forum topic: Where is the new employee handbook and paperwork?',
          time: '28 minutes ago',
          image: 'https://via.placeholder.com/40',
          read: false,
        },
        {
          id: 3,
          name: 'Antonia Murray',
          message: 'has requested to join the space: Information Technology',
          time: '15 minutes ago',
          image: 'https://via.placeholder.com/40',
          read: false,
        },
        {
          id: 4,
          name: 'Unima-market-place Admin ',
          message: 'has accepted your registration request',
          time: '31 minutes ago',
          image: 'https://via.placeholder.com/40',
          read: false,
        },
        {
          id: 5,
          name: 'Kaponda investments',
          message: 'has posted an update',
          time: '55 minutes ago',
          image: 'https://via.placeholder.com/40',
          read: false,
        },
      ];

      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
      </div>
      <div className="p-4">
        {notifications.map((notification) => (
          <div key={notification.id} className={`flex items-center border-b py-3 ${notification.read ? 'bg-gray-100' : ''}`}>
            <img
              src={notification.image}
              alt={notification.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-4 flex-1">
              <p className="text-gray-800 font-medium">{notification.name}</p>
              <p className="text-gray-600">{notification.message}</p>
              <p className="text-gray-400 text-sm">{notification.time}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => markAsRead(notification.id)}
                className="text-blue-500 hover:text-blue-700"
              >
                Mark as Read
              </button>
              <button
                onClick={() => deleteNotification(notification.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
