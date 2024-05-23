import React, { useState } from 'react';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(256); // Initial width (in pixels)

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = e.clientX;
    if (newWidth >= 100 && newWidth <= 500) { // Set min and max width
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="flex">
      <div
        className="flex flex-col bg-gray-200 p-4 border-r border-gray-300"
        style={{ width: sidebarWidth }}
      >
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
          <li><strong>Categories interested:</strong><p className="text-gray-600">Stationeries <br /> Clothing <br />Food</p></li>
          <br />
          <strong>
            <p>Other Social Links</p>
            <li><a href="https://twitter.com/johndoe" className="text-blue-500 hover:underline mr-4">Twitter</a></li>
            <li><a href="https://linkedin.com/in/johndoe" className="text-blue-500 hover:underline">LinkedIn</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">088800900</a></li>
          </strong>
        </ul>
      </div>
      <div
        className="w-2 bg-gray-500 cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default Sidebar;
