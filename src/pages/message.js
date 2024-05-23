import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Messaging() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, can you hear me?', sender: 'me', timestamp: 'Today, 5:38 PM' },
    { id: 2, text: 'I\'m in California dreaming', sender: 'me', timestamp: 'Today, 5:38 PM' },
    { id: 3, text: '... about who we used to be.', sender: 'them', timestamp: 'Today, 5:38 PM' },
    { id: 4, text: 'Are you serious?', sender: 'them', timestamp: 'Today, 5:38 PM' },
    { id: 5, text: 'When we were younger and free...', sender: 'me', timestamp: 'Today, 5:38 PM' },
    { id: 6, text: 'I\'ve forgotten how it felt before', sender: 'me', timestamp: 'Today, 5:38 PM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <>
    <Header></Header>
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-grow overflow-auto bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4 text-center text-gray-500">{messages[0].timestamp}</div>
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 my-2 rounded-lg shadow ${message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow px-4 py-2 mr-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Send
        </button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Messaging;
