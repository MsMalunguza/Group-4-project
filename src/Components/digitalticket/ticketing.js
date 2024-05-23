import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Ticketings = () => {
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const generateTicketNumber = () => {
    const ticketNumber = 'TICKET-' + Math.floor(Math.random() * 1000000);
    alert('Your ticket number is: ' + ticketNumber);
    setQrCodeValue(ticketNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
    console.log(formValues);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center mb-6 text-2xl text-gray-800">Customer Ticketing Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 font-bold text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2 font-bold text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-bold text-gray-700">Description of the Problem</label>
            <textarea
              id="description"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base"
              placeholder="Type here..."
            ></textarea>
          </div>
          <button
            type="button"
            onClick={generateTicketNumber}
            className="w-full p-2 mb-4 bg-black text-white rounded-md hover:bg-yellow-500 transition ease-in-out duration-300"
          >
            Generate QR Code
          </button>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-md hover:bg-yellow-900 transition ease-in-out duration-300"
          >
            Submit
          </button>
        </form>
        {qrCodeValue && (
          <div className="flex justify-center mt-4">
            <QRCode value={qrCodeValue} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ticketings;
