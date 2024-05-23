import React from 'react';
import NotificationBell from './Components/NotificationBell';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1>Header</h1>
        <NotificationBell />
      </header>
      <main className="flex-1 flex justify-center items-center">
        <p></p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
