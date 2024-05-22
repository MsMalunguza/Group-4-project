import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">OUR COMPANY</h1>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">THE UNIVERSITY MARKET-PLACE</h2>
          <p className="mt-4 text-gray-600">
          Welcome to Student Market, the ultimate online marketplace designed specifically for students. Our mission is to create a seamless platform where students can easily buy and sell a wide range of products, from textbooks and electronics to furniture and clothing.</p>
          <p className="mt-4 text-gray-600">
          We understand the unique needs and budget constraints of students, and we aim to provide an affordable, convenient, and secure shopping experience. Whether you're looking to make some extra cash by selling items you no longer need, or you're on the hunt for great deals on essential products, 
          Student Market has got you covered.<br /><br />Our platform is user-friendly, 
          ensuring that even those with minimal technical skills can navigate and use our services effortlessly. We prioritize safety and transparency, offering features like verified profiles and secure payment options to protect our users.</p>
          
          <button className="mt-6 px-6 py-3 text-white bg-black rounded-lg hover:bg-gray-800">EXPLORE MORE</button>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">BE PART OF THE UNIVRSITY E-COMMERCE</h3>
            <p className="mt-2 text-gray-600">
              We’re growing quickly and are always looking for great new people to add to our team.
            </p>
            <a href="/careers" className="mt-4 text-indigo-600">Browse Careers</a>
          </div>
          <div className="flex-1 p-4 bg-gray-200 rounded-lg mt-4 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800">INVESTORS</h3>
            <p className="mt-2 text-gray-600">
              Visit our Investor Relations portal for more detailed information including earnings calls and annual reports.
            </p>
            <a href="/investors" className="mt-4 text-indigo-600">Investor Links</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
