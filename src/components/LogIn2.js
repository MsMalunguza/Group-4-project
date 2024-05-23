import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


export default function LogIn2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <Header></Header>
    <div className="h-screen flex flex-col items-center justify-center">
      <form
        className="shadow-2xl bg-gray-300 flex flex-col justify-center items-center rounded-lg w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-3xl p-4">Sign In</h1>
        <div className="flex items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="border-2 rounded-full p-2 ml-2"
            {...register("userName", { required: true })}
            placeholder="username"
            aria-invalid={errors.userName ? "true" : "false"}
          />
        </div>
        {errors.userName?.type === "required" && (
          <p className="text-red-500" role="alert">
            Username is required
          </p>
        )}

        <div className="flex items-center p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password" // Set the input type to "password"
            className="border-2 rounded-full p-2 ml-2"
            {...register("password", {
              pattern: /^[A-Za-z]+$/i,
              required: true,
            })}
            placeholder="password"
            aria-invalid={errors.password ? "true" : "false"}
          />
        </div>
        {errors.password?.type === "required" && (
          <p className="text-red-500" role="alert">
            Password is required
          </p>
        )}

        <input
          className="uppercase text-black bg-yellow-700 text-center border-2 rounded-full p-2 hover:bg-yellow-700 hover:text-black hover:scale-110 w-40 mr-auto ml-auto mb-6 transition duration-700 ease-in-out"
          type="submit"
        />

        <div className="flex">
          <p>Create new account?</p>
          <NavLink
            className="text-red-900 text-center rounded-full hover:underline hover:underline-offset-2 w-20 mr-auto ml-auto mb-6 transition duration-700 ease-in-out"
            to="/register"
          >
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
    <Footer></Footer>
    </>
  );
}
