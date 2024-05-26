import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Header from './Header';
import Footer from './Footer';

const CustomerTicketingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: ''
  });
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const generateQrCode = () => {
    const { firstName, lastName, email, description } = formData;
    const qrData = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nDescription: ${description}`;
    setQrCodeValue(qrData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
    <Header></Header>
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Ticketing Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Description of the Problem</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={generateQrCode}
            className="bg-black text-white px-4 py-2 rounded-md"
          >
            Generate QR Code
          </button>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      {qrCodeValue && (
        <div className="mt-6 text-center">
          <QRCode value={qrCodeValue} />
        </div>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};

export default CustomerTicketingForm;