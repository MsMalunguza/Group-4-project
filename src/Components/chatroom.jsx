import React, { useState } from 'react';
import Messagingf from './messagingft';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'senator', text: 'I feeliz' },
    { id: 2, sender: 'senator', text: 'you are just like me' },
    { id: 3, sender: 'senator', text: 'but what’s to judge?' },
    { id: 4, sender: 'senator', text: 'and when our guard is down' },
    { id: 5, sender: 'senator', text: 'that violence memes violence' },
    { id: 6, sender: 'saucy_jack', text: 'Standing here' },
    { id: 7, sender: 'saucy_jack', text: 'I’m trying to meme history' },
    { id: 8, sender: 'saucy_jack', text: 'the right from wrong?' },
    { id: 9, sender: 'saucy_jack', text: 'maybe we’ll both agree' },
    { id: 10, sender: 'saucy_jack', text: 'and in the end' },
    { id: 11, sender: 'saucy_jack', text: 'it has to be this way' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'you', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-gray-200 p-4 border-r border-gray-300">
        <div className="flex items-center space-x-4 p-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">User 79884</h2>
            <p className="text-gray-600">@MISHECK</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Other Information</h3>
          <ul className="mt-2 text-gray-700">
            <li className="mt-1">Email: bsc-com-01-21@unima</li>
            <li className="mt-1">Joined: January 2024</li>
            <li className="mt-1">Status: Online</li>
            <br />
          </ul>
        </div>
        <ul>
            <li><strong>Categories intrested:</strong><p className="text-gray-600">Stationaries <br /> Clothing <br />Food</p> </li>
            <br />
            <strong>
            <p>Other Social Links</p>
            <li><a href="https://twitter.com/johndoe" className="text-blue-500 hover:underline mr-4">Twitter</a></li>
            <li><a href="https://linkedin.com/in/johndoe" className="text-blue-500 hover:underline">LinkedIn</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">088800900</a></li>
            
            </strong>
        </ul>
      </div>

      {/* Chat area */}
      <div className="flex flex-col flex-grow">
        <div className="flex-shrink-0 p-4 bg-blue-400 text-white">
          <h1 className="text-xl font-semibold"><a href="/home" className="flex flex-row">HOME</a>Chat Room</h1>
        </div>
        <div className="flex flex-col flex-grow p-4 overflow-auto">
          {messages.map((message) => (
            <Messagingf key={message.id} sender={message.sender} text={message.text} />
          ))}
        </div>
        <div className="flex p-4 bg-white border-t border-gray-400">
          <input
            type="text"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
