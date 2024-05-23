// src/App.js
import React from 'react';
import Notification from './Components/Notification';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1>Header</h1>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <Notification />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
