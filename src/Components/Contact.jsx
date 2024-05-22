import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto">
          <iframe
            title="ContactMap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15387.057965637681!2d35.3372455!3d-15.3892358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d904e65366a83f%3A0xf1f319d6a0c14cf9!2sUniversity%20of%20Malawi!5e0!3m2!1sen!2smw!4v1715499439802!5m2!1sen!2smw"
            width="100%"
            height="400"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="max-w-7xl mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow">
            <div className="col">
              <h3 className="text-xl font-semibold mb-4">Contact:</h3>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="phone"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Comment
                  </label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    id="comment"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="col">
              <h3 className="text-center text-xl font-semibold mb-4">
                Get in Touch with Us:
              </h3>
              <div className="ml-52">
                <p>Group four members</p>
                <p>Department of Computer Science,</p>
                <p>University of Malawi, Chancellor College,</p>
                <p>P.O. BOX 280, Zomba, Malawi.</p>
                <p>Phone: +265 (0) 99 6467 525</p>
                <p>Email: preciouspraise41@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
