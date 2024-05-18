import React from "react";
import { useForm } from "react-hook-form";

export default function LogIn2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <form
        className="bg-purple-300 flex flex-col justify-center items-center rounded-lg w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold text-3xl p-4">Sign In</h1>
        <div className="flex items-center  p-4">
          <svg
            // className="w-12 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            className="border-2 rounded-full p-2"
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

        <div className="flex items-center  p-5">
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
        )}

        <input
          className="border-2 rounded-full p-2 hover:bg-gray-100 w-40 mr-auto ml-auto mb-6 mt-2"
          type="submit"
        />
      </form>
    </div>
  );
}
