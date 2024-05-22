import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Footer from "../Footer";

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
      <div className="h-screen flex flex-col items-center justify-center ">
        <form
          className=" flex flex-col  rounded-lg w-96"
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
            <label htmlFor="comfirmPassword"> Comfirm Password</label>
            <input
              className="border-2 rounded-full p-2 "
              {...register("comfirmPassword", { required: true })}
              placeholder="comfirmPassword"
              id="comfirmPassword"
              aria-invalid={errors.comfirmPassword ? "true" : "false"}
            />
          </div>
          {errors.comfirmPassword?.type === "required" && (
            <p className="text-red-500" role="alert">
              Comfirm Password is required
            </p>
          )}

          <input
            className="border-2 rounded-full p-2 hover:bg-gray-100 w-40 mr-auto ml-auto mb-6 "
            type="submit"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
