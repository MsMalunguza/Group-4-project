import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  BsBoxArrowInRight,
} from "react-icons/bs";

export default function LogInTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form
        className="shadow-2xl bg-gray-300 flex flex-col justify-center rounded-lg w-full max-w-md p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-3xl text-center mb-4">Sign In</h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="userName" className="mb-1">Username</label>
          <input
            className="border-2 rounded-full p-2"
            {...register("userName", { required: true })}
            placeholder="username"
            id="userName"
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.userName?.type === "required" && (
            <p className="text-red-500" role="alert">
              Username is required
            </p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-1">Password</label>
          <input
            type="password"
            className="border-2 rounded-full p-2"
            {...register("password", { required: true })}
            placeholder="password"
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500" role="alert">
              Password is required
            </p>
          )}
        </div>

        <input
          className="uppercase text-white bg-black text-center border-2 rounded-full p-2 hover:bg-white hover:text-black w-40 mb-4 transition duration-700 ease-in-out"
          type="submit"
        />

        <div className="flex justify-center">
          <p className="mr-2">Create new account?</p>
          <NavLink to="/Register2" className="flex items-center text-lg">
              <BsBoxArrowInRight className="mr-1 w-9 h-6" />
              Register now
            </NavLink>
        </div>
      </form>
    </div>
  );
}
