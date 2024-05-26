import img1 from "./laptop2.webp";
import img from "./img.webp";
import imgq from "./img1.jpeg";
import img2 from "./img2.webp";
import img5 from "./img5.webp";
import img4 from "./img4.jpeg";
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
            <div>
            <img src={img1} alt="" />
          </div>
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
              src="C:\Users\Misheck\Desktop\misheckbsc\Revert\Group-4-project\src\Components\chelsea-1.jpg"
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img} alt="" />
          </div>
             <p>SPORTS JERSEYS OF ALL KINDS</p>
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
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={imgq} alt="" />
          </div>
          <p>NIKE SHOES @ 45,000MWK</p>
            </h3>
            <p class="mt-4 text-lg font-thin"></p>
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
        <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img2} alt="" />
          </div>
          <p>Sports jersey now at discount @23,00mwk</p>
            </h3>
            <p class="mt-4 text-lg font-thin"></p>
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
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img5} alt="" />
          </div>
          <p>Cloths of men and women in stock</p>
            </h3>
            <p class="mt-4 text-lg font-thin">GET YOURS NOW</p>
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
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img4} alt="" />
          </div>
          <p>IPHONE 13 pro @760,00mwk</p>
            </h3>
            <p class="mt-4 text-lg font-thin">shop now and its on your way!!</p>
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
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img5} alt="" />
          </div>
          <p>Cloths of men and women in stock</p>
            </h3>
            <p class="mt-4 text-lg font-thin">ORDER YOURS NOW!</p>
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
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img} alt="" />
          </div>
          <p>Jerseys of top leagues @cheapest price</p>
            </h3>
            <p class="mt-4 text-lg font-thin">contact the seller for discount and more!</p>
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

          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            <div>
            <img src={img1} alt="" />
          </div>
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
          </div>
      </div>
    </div>
  );
}
