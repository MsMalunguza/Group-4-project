import React, { useState } from 'react';
import Messagingf from './messagingft';
import Header from './Header';
import Footer from './Footer';


const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'senator', text: 'hello, i need 3 laptops' },
    { id: 2, sender: 'senator', text: 'and some food items to keep me for this semester' },
    { id: 6, sender: 'saucy_jack', text: 'Okay, you can send your location and i will send em to you' },
    { id: 7, sender: 'saucy_jack', text: 'if any items you need am always available' },
    { id: 3, sender: 'senator', text: 'Appreciate your service,' },
    { id: 4, sender: 'senator', text: 'if i have any problem, i will come straight to you' },
    { id: 5, sender: 'senator', text: 'i will be wating for my package delivery' },
    { id: 8, sender: 'saucy_jack', text: 'confirm your orders and the products are on your way ' },
    { id: 9, sender: 'saucy_jack', text: 'Thank you' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'you', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <>
    <Header></Header>
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
            <li><strong>Categories intrested:</strong><p className="text-gray-650">Stationaries <br /> Clothing <br />Food</p> </li>
            <br />
            <strong>
            <p>Other Social Links</p>
            <li><a href="https://twitter.com/grace" className="text-blue-600 hover:underline mr-4">Twitter</a></li>
            <li><a href="https://linkedin.com/in/bright" className="text-blue-500 hover:underline">LinkedIn</a></li>
            <li><a href="https://tiktok.com/misheck_ii" className="text-blue-500 hover:underline">Tiktok</a></li>
            <li><a href="https://github.com/QUANTIQU100" className="text-blue-500 hover:underline">GITHUB</a></li>
            <li><a href="https://facebook.com/misheck.chihana.52" className="text-blue-500 hover:underline">Facebook</a></li>
            
            <li><a href="#" className="text-blue-500 hover:underline">088800900</a></li>
            
            </strong>
        </ul>
      </div>

      {/* Chat area */}
      <div className="flex flex-col flex-grow">
        <div className="flex-shrink-0 p-4 bg-gray-900 text-white">
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
            className="px-4 py-2 bg-black text-white rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChatRoom;
