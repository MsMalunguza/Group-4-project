import React from "react";
import Dropdown from "./Dropdown";
import {
  BsSearch,
  BsPerson,
  BsBoxArrowInRight,
  BsCart,
  BsBell,
} from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function Header() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Search query:", data.searchQuery);
  };
  return (
    <>
      <header className="h-100%">
        <div className="bg-gray-800 py-1 px-3 text-large text-white">
          <div className="flex justify-between">
            <div>
              <p>Free Delivery Over k10,000 & Free Return</p>
            </div>
            <div>
              <p>
                Mobile Line:{" "}
                <a className="text-white" href="tel:+265996467525">
                  +265 (0) 883754245
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 flex justify-between">
          <div className="">
            <Link to="/" className="text-3xl text-white">
              UNIMA Market Place
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className=" flex w-4/12">
            <input
              type="text"
              placeholder="Search..."
              {...register("searchQuery", { required: true })}
              className="border p-2 rounded-l-md w-full"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-gray-400 "
            >
              <BsSearch className="text-lg" />
            </button>
          </form>

          <div className="flex items-center justify-around w-4/12 ml-4 mr-2 space-x-4 text-white">
            <NavLink to="/accounts" className="flex items-center text-lg">
              <BsPerson className="mr-1 w-9 h-6" />
              Account
            </NavLink>
            <NavLink to="/Register2" className="flex items-center text-lg">
              <BsBoxArrowInRight className="mr-1 w-9 h-6" />
              Register
            </NavLink>
            <NavLink to="/Login2" className="flex items-center text-lg">
              <MdManageAccounts className="mr-1 w-9 h-6" />
              SignIn
            </NavLink>
            <NavLink to="/cart" className="flex items-center text-lg">
              <BsCart className="mr-1 w-9 h-6" />
              Cart
            </NavLink>
            <NavLink to="/notification" className="flex items-center text-lg">
              <BsBell className="mr-1 w-9 h-6" />
              Notification
            </NavLink>
          </div>
        </div>

        <div className="header-bottom-strip bg-gray-800 p-3 text-xl text-white">
          <div className="container mx-auto">
            <div className="flex items-center space-x-4">
              <Dropdown></Dropdown>

              <div className="flex space-x-4">
                <NavLink to="/" className="text-white">
                  Home
                </NavLink>
                <NavLink to="/" className="text-white">
                  Digital ticketing
                </NavLink>
                <NavLink to="/OrderTracking" className="text-white">
                  orders/Tracking
                </NavLink>
                <NavLink to="/payments" className="text-white">
                  Payments
                </NavLink>
                <NavLink to="/" className="text-white">
                  Support
                </NavLink>
                <NavLink to="/contact" className="text-white">
                  Contact
                </NavLink>
                <NavLink to="/about" className="text-white">
                  About
                </NavLink>
                <NavLink to="/chatroom" className="text-white">
                  Messaging
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
