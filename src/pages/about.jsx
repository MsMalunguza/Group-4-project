import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">OUR COMPANY</h1>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">THE BUSINESS OF GOOD FOOD</h2>
          <p className="mt-4 text-gray-600">
            When Chipotle opened its first restaurant in 1993, the idea was simple: show that food served fast didn’t have to be a "fast-food" experience. Using high-quality raw ingredients, classic cooking techniques, and distinctive interior design, we brought features from the realm of fine dining to the world of quick-service restaurants.
          </p>
          <p className="mt-4 text-gray-600">
            Over 23 years later, our devotion to seeking out the very best ingredients we can—raised with respect for animals, farmers, and the environment—remains at the core of our commitment to Food With Integrity. And as we’ve grown, our mission has expanded to ensuring that better food is accessible to everyone.
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">FOOD WITH INTEGRITY</button>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">GET YOUR CAREER ROLLING AT CHIPOTLE</h3>
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
