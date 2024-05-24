import img1 from "./laptop2.webp";
import { NavLink } from "react-router-dom";
import {
  BsCart,
} from "react-icons/bs";

export default function Card() {
  return (
    <div>
      <div class="px-10 py-20 bg-gray-100 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={img1} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
            </h3>
            <p class="mt-4 text-lg font-thin">mwk 350,000</p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button class="font-semibold text-gray-800"><button class="font-semibold text-gray-800">
            <NavLink to="/CartWrapper" className="flex items-center text-lg">
              Add To Cart
            </NavLink></button></button>
            
            </span>
            <span class="flex items-center justify-center mt-4 w-[50%] bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button><NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink></button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={img1} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
            </h3>
            <p class="mt-4 text-lg font-thin">MWK 350,000</p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button class="font-semibold text-gray-800"><button class="font-semibold text-gray-800">
            <NavLink to="/CartWrapper" className="flex items-center text-lg">
              Add To Cart
            </NavLink></button></button>
            
            </span>
            <span class="flex items-center justify-center mt-4 w-[50%] bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button><NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink></button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src="https://www.macworld.com/wp-content/uploads/2022/01/macbook-pro-compare.jpg?quality=50&strip=all&w=1024"
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
            </h3>
            <p class="mt-4 text-lg font-thin">mwk 300 000</p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button class="font-semibold text-gray-800"><button class="font-semibold text-gray-800">
            <NavLink to="/CartWrapper" className="flex items-center text-lg">
              Add To Cart
            </NavLink></button></button>
            </span>
            <span class="flex items-center justify-center mt-4 w-[50%] bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button><NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink></button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={img1} alt="" />"
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
            </h3>
            <p class="mt-4 text-lg font-thin">mwk 350,000</p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button class="font-semibold text-gray-800"><button class="font-semibold text-gray-800">
            <NavLink to="/CartWrapper" className="flex items-center text-lg">
              Add To Cart
            </NavLink></button></button>
            </span>
            <span class="flex items-center justify-center mt-4 w-[50%] bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button><NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink></button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src="https://cdn.mos.cms.futurecdn.net/GfinEMFXnT42BFxAcDc2rA.jpg"
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
            </h3>
            <p class="mt-4 text-lg font-thin">mwk 350, 000</p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button class="font-semibold text-gray-800"><button class="font-semibold text-gray-800">
            <NavLink to="/CartWrapper" className="flex items-center text-lg">
              Add To Cart
            </NavLink></button></button>
            </span>
            <span class="flex items-center justify-center mt-4 w-[50%] bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button><NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink></button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src="https://images.indianexpress.com/2021/12/macbook-pro-2021-review-featured-image.jpg"
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Apple MacBook Pro M1 13.3&quot; Silver 16GB/512GB (MYDC2FN/A-16GB)
            </h3>
            <p class="mt-4 text-lg font-thin">mwk 500,000</p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button class="font-semibold text-gray-800">
            <NavLink to="/CartWrapper" className="flex items-center text-lg">
              Add To Cart
            </NavLink></button>
            </span>
            <span class="flex items-center justify-center mt-4 w-[50%] bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button><NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
