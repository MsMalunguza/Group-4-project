import React from 'react';

const Header = () => {
  return (
    <header className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">HOME</h1>
        <div className="bg-black text-white px-2 py-1 rounded">Sale</div>
      </div>
    </header>
  );
};

export default Header;
