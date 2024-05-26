import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";


export default function RegisterTwo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form
        className="flex flex-col rounded-lg w-full max-w-md shadow-2xl bg-gray-300 p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-3xl text-center mb-4">Register</h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="firstName" className="mb-1">First Name</label>
          <input
            className="border-2 rounded-full p-2"
            {...register("userName", { required: true })}
            placeholder="username"
            id="firstName"
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.userName?.type === "required" && (
            <p className="text-red-500" role="alert">
              Username is required
            </p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="lastName" className="mb-1">Last Name</label>
          <input
            className="border-2 rounded-full p-2"
            {...register("lastName", { required: true })}
            placeholder="last name"
            id="lastName"
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <p className="text-red-500" role="alert">
              Last name is required
            </p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-1">Email</label>
          <input
            className="border-2 rounded-full p-2"
            {...register("email", { required: true })}
            placeholder="email"
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500" role="alert">
              Email is required
            </p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-1">Password</label>
          <input
            className="border-2 rounded-full p-2"
            {...register("password", { required: true })}
            placeholder="password"
            type="password"
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500" role="alert">
              Password is required
            </p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="comfirmPassword" className="mb-1">Confirm Password</label>
          <input
            className="border-2 rounded-full p-2"
            {...register("comfirmPassword", { required: true })}
            placeholder="confirm password"
            type="password"
            id="comfirmPassword"
            aria-invalid={errors.comfirmPassword ? "true" : "false"}
          />
          {errors.comfirmPassword?.type === "required" && (
            <p className="text-red-500" role="alert">
              Confirm password is required
            </p>
          )}
        </div>

        <div className="flex flex-col items-center mt-4">
          <input
            className="uppercase text-white bg-black text-center border-2 rounded-full p-2 hover:bg-white hover:text-black w-40 mb-4 transition duration-700 ease-in-out"
            type="submit"
          />
          <p>Already have an account? </p> <br />
            <NavLink to="/LogIn2" className="flex items-center text-lg"> <button className="uppercase text-white bg-black text-center border-2 rounded-full p-2 hover:bg-white hover:text-black w-40 mb-4 transition duration-700 ease-in-out"
            >
              SignIn
              </button>
            </NavLink>
        </div>
      </form>
    </div>
  );
}
