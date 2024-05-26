import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function UserProfile() {
  const [profile, setProfile] = useState({
    firstName: "Beatrice",
    lastName: "Ml",
    email: "bsc-inf-08-21@unima",
    timeZone: "South-Africa",
    developmentMode: "Beatrice-2000",
    Mode: "Default",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <>
    <Header></Header>
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-semibold mb-6">Account</h2>
      <div className="flex items-center mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0">
      
        </div>
        <div className="ml-4">
          <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">
            Change Profile Picture
          </button>
          <p className="text-gray-500 mt-2">
            your user-profile dashboard
          </p>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">
          Change Password
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-900">Time Zone</label>
        <select
          name="timeZone"
          value={profile.timeZone}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        >
          <option>Africa - Pretoria</option>
          <option>America - New York</option>
          <option>Africa - Malawi</option>
          <option>Asia - China</option>
        </select>
        <p className="text-gray-500 mt-1">
          Queries you create will default to this time zone.
        </p>
      </div>
      <div className="mb-4">
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Text Editor Mode</label>
        <select
          name="textEditorMode"
          value={profile.textEditorMode}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        >
          <option>Default</option>
          <option>Advanced</option>
        </select>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default UserProfile;
