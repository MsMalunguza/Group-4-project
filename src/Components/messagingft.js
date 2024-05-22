import React from 'react';

const Messagingf = ({ sender, text }) => {
  const isSenator = sender === 'senator';
  const alignment = isSenator ? 'justify-start' : 'justify-end';
  const bgColor = isSenator ? 'bg-gray-300' : 'bg-blue-500 text-white';

  return (
    <div className={`flex w-full my-2 ${alignment}`}>
      <div className={`px-4 py-2 rounded-lg ${bgColor}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Messagingf;
