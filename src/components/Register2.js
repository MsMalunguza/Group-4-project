import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export default function Register2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    
    <div className="h-screen flex flex-col items-center justify-center ">
      <form
        className=" flex flex-col rounded-lg w-96 shadow-2xl bg-gray-300 w-5/12 pl-14 pr-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold  text-3xl p-2">Register</h1>

        <div className="flex items-center  p-4">
          <label htmlFor="firstName">First Name</label>
          <input
            className="border-2 rounded-full p-2 m-2"
            {...register("userName", { required: true })}
            placeholder="username"
            id="firstName"
            aria-invalid={errors.userName ? "true" : "false"}
          />
        </div>
        {errors.userName?.type === "required" && (
          <p className="text-red-500" role="alert">
            Username is required
          </p>
        )}

        <div className="flex items-center  p-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="border-2 rounded-full p-2 m-2"
            {...register("lastName", { required: true })}
            placeholder="last name"
            id="lastName"
            aria-invalid={errors.lastName ? "true" : "false"}
          />
        </div>
        {errors.lastName?.type === "required" && (
          <p className="text-red-500" role="alert">
            last name is required
          </p>
        )}

        <div className="flex items-center  p-2">
          <label htmlFor="email">Email</label>
          <input
            className="border-2 rounded-full p-2 m-2"
            {...register("email", { required: true })}
            placeholder="email"
            id="email"
            aria-invalid={errors.email ? "true" : "false"}
          />
        </div>
        {errors.email?.type === "required" && (
          <p className="text-red-500" role="alert">
            email is required
          </p>
        )}

        <div className="flex items-center  p-2">
          <label htmlFor="password">Password</label>
          <input
            className="border-2 rounded-full p-2 m-2"
            {...register("password", { required: true })}
            placeholder="password"
            type="password"
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
          />
        </div>
        {errors.password?.type === "required" && (
          <p className="text-red-500" role="alert">
            password is required
          </p>
        )}

        <div className="flex items-center mb-2 p-2">
          <label htmlFor="comfirmPassword mr-2" className="mr-2">
            {" "}
            Comfirm Password
          </label>
          <input
            className="border-2 rounded-full p-2 "
            {...register("comfirmPassword", { required: true })}
            placeholder="comfirmPassword"
            type="password"
            id="comfirmPassword"
            aria-invalid={errors.comfirmPassword ? "true" : "false"}
          />
        </div>
        {errors.comfirmPassword?.type === "required" && (
          <p className="text-red-500" role="alert">
            Comfirm Password is required
          </p>
        )}

        {/* <div className="flex items-center  p-5">
          <svg
            // className="w-10 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            className="border-2 rounded-full p-2"
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
            password is required
          </p>
        )} */}

        {/* <input
          className="border-2 rounded-full p-2 hover:bg-gray-100 w-40 mr-auto ml-auto mb-6 "
          type="submit"
        /> */}

        <div className="flex flex-around mt-4">
          <input
            className="uppercase text-white bg-black text-center border-2 rounded-full p-2 hover:bg-white hover:text-black w-40 mr-auto ml-auto mb-6 transition duration-700 ease-in-out"
            type="submit"
          />

          <NavLink
            to="/login"
            className="bg-yellow-700 text-center border-2 rounded-full p-2 hover:bg-gray-100 w-40 mr-auto ml-auto mb-6 transition duration-700 ease-in-out"
          >
            SIGN IN
          </NavLink>
        </div>
      </form>
    </div>
  );
}
