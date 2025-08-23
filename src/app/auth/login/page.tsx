"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface formdata {
  email: string;
  password: string;
}

const formSubmitHandler = async (data: formdata) => {};
const Login = () => {
  const form = useForm<formdata>({
    mode: "onBlur",
  });
  const { register, handleSubmit, formState } = form;
  const { isValid, errors } = formState;
  return (
    <div className="w-full text-blue-950">
      <div className="w-9/10 bg-gray-200 mx-6 grid grid-cols-2 border shadow-gray-200 border-gray-300 h-8 rounded-full">
        <div className="w-full text-center bg-white rounded-full font-extrabold">
          Sign In
        </div>
        <div className="w-full text-center rounded-full font-semibold">
          <Link href="/auth/signup">Sign Up</Link>
        </div>
      </div>
      <div className="ml-8 my-12 w-full pr-16 font-semibold">
        <form noValidate onSubmit={handleSubmit(formSubmitHandler)}>
          <div className="my-4">
            <label htmlFor="email" className="font-extrabold">
              Email address:
            </label>
            <input
              className="block border bg-gray-200 shadow-gray-100 border-gray-200 my-2 p-2 h-8 rounded-md w-full focus:border-violet-600 "
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-600 text-bold text-sm">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="">
            <label htmlFor="password" className="font-extrabold">
              Password:{" "}
            </label>
            <input
              {...register("password", {
                minLength: {
                  value: 8,
                  message: "Invalid password",
                },
              })}
              className="block border bg-gray-200 shadow-gray-100 border-gray-200 my-2 p-2 h-8 rounded-md w-full focus:border-violet-600"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-600 text-bold text-sm">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="block border shadow-3xl shadow-blue-950 border-gray-400 my-6 py-2 h-auto rounded-xl w-full bg-blue-950 text-white text-center"
            type="submit"
            value="Sign In"
            disabled={!isValid}
          />
        </form>
        <div className="flex w-full text-gray-600">
          <div className="flex-grow border-t mt-3 border-gray-300"></div>
          <span className="px-3 bg-white">or continue with</span>
          <div className="flex-grow border-t mt-3 border-gray-300"></div>
        </div>

        <button className="w-full rounded-lg my-4 font-bold border border-gray-200 text-center py-1">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
