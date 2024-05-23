import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Register2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
    <Header></Header>
<div className="flex flex-col items-center justify-center">
  <form
    className="flex flex-col rounded-0g bg-gray-300 p-10 w-full max-w-2xl"
    onSubmit={handleSubmit(onSubmit)}
  >
    <h1 className="font-bold text-5xl p-4 text-center">Register</h1>

    <div className="flex flex-col items-center p-4">
      <label htmlFor="firstName" className="text-xl mb-2">First Name</label>
      <input
        className="border-2 rounded-full p-4 m-2 w-full max-w-md text-lg"
        {...register("userName", { required: true })}
        placeholder="username"
        id="firstName"
        aria-invalid={errors.userName ? "true" : "false"}
      />
    </div>
    {errors.userName?.type === "required" && (
      <p className="text-red-500 text-center" role="alert">
        Username is required
      </p>
    )}

    <div className="flex flex-col items-center p-4">
      <label htmlFor="lastName" className="text-xl mb-2">Last Name</label>
      <input
        className="border-2 rounded-full p-4 m-2 w-full max-w-md text-lg"
        {...register("lastName", { required: true })}
        placeholder="last name"
        id="lastName"
        aria-invalid={errors.lastName ? "true" : "false"}
      />
    </div>
    {errors.lastName?.type === "required" && (
      <p className="text-red-500 text-center" role="alert">
        Last name is required
      </p>
    )}

    <div className="flex flex-col items-center p-4">
      <label htmlFor="email" className="text-xl mb-2">Email</label>
      <input
        className="border-2 rounded-full p-4 m-2 w-full max-w-md text-lg"
        {...register("email", { required: true })}
        placeholder="email"
        id="email"
        aria-invalid={errors.email ? "true" : "false"}
      />
    </div>
    {errors.email?.type === "required" && (
      <p className="text-red-500 text-center" role="alert">
        Email is required
      </p>
    )}

    <div className="flex flex-col items-center p-4">
      <label htmlFor="password" className="text-xl mb-2">Password</label>
      <input
        className="border-2 rounded-full p-4 m-2 w-full max-w-md text-lg"
        {...register("password", { required: true })}
        placeholder="password"
        type="password"
        id="password"
        aria-invalid={errors.password ? "true" : "false"}
      />
    </div>
    {errors.password?.type === "required" && (
      <p className="text-red-500 text-center" role="alert">
        Password is required
      </p>
    )}

    <div className="flex flex-col items-center mb-4 p-4">
      <label htmlFor="comfirmPassword" className="text-xl mb-2">
        Confirm Password
      </label>
      <input
        className="border-2 rounded-full p-4 m-2 w-full max-w-md text-lg"
        {...register("comfirmPassword", { required: true })}
        placeholder="confirm password"
        type="password"
        id="comfirmPassword"
        aria-invalid={errors.comfirmPassword ? "true" : "false"}
      />
    </div>
    {errors.comfirmPassword?.type === "required" && (
      <p className="text-red-500 text-center" role="alert">
        Confirm Password is required
      </p>
    )}

    <div className="flex flex-col items-center mt-8 space-y-4">
      <input
        className="uppercase text-white bg-black text-center border-2 rounded-full p-4 w-full max-w-xs hover:bg-white hover:text-black transition duration-700 ease-in-out"
        type="submit"
      />
       <p>Already have an acount?</p>

       <NavLink to="/Login2" className="text-white">
                  SignIn
                </NavLink>
    </div>
  </form>
</div>
<Footer></Footer>

     </>
  );
}
