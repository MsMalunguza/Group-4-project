import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <Header></Header>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">CONTACT US</h1>
        <p className="text-center text-gray-600 mb-6">
          Need to get in touch with us? Either fill out the form with your inquiry or find the <a href="misheck:bsc-com-01-21@unima.ac.mw" className="text-indigo-600">department email</a> you'd like to contact below.
        </p>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">First name*</label>
              <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="First name" required />
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <label className="block text-gray-700">Last name*</label>
              <input type="text" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Last name" required />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input type="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-gray-700">What can we help you with?</label>
            <textarea className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-black rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black">Submit</button>
     </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Contact;
