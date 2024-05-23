import React from 'react';
import Header from './Header';
import Footer from './Footer';
const UserProfile = () => {
  const handleSignOut = () => {
    // Handle sign out
    alert('You have signed out.');
  };

  return (
  <>
  <Header></Header>
    <div className="max-h-screen flex items-center justify-center bg-purple-150">
    <div className="bg-gray-500 p-8 rounded-lg shadow-lg w-1/2">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-left text-black"></h1>
          <div className="bg-black text-white px-2 py-1 rounded">Sale</div>
        </div>
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z" />
          </svg>
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">NAME</label>
          <input
            type="text"
            value="PRECIOUS BANDA"
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">EMAIL</label>
          <input
            type="email"
            value="Bandaprecious@gmail.com"
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">CONTACTS</label>
          <input
            type="tel"
            value="088800900"
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2">LOCATION</label>
          <input
            type="text"
            value="chikanda, zomba"
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none bg-gray-200"
          />
        </div>
        <button
          onClick={handleSignOut}
          className="w-full bg-brown text-white py-2 rounded-lg hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-brown-light"
        >
          SIGN OUT
        </button>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default UserProfile;
