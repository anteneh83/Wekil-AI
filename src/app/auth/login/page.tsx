/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

interface formdata {
  email: string;
  password: string;
}

const formSubmitHandler = async (data: formdata) => {
  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (!response?.ok) {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.log(error);
  }
};
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
            <div className="flex justify-between">
              <img
                src="https://www.citypng.com/public/uploads/preview/hd-letter-email-round-blue-icon-transparent-png-70175169503463700jpjirgdw.png"
                className="w-8 h-8 mt-2 mx-2 rounded-full "
                alt=""
              />
              <input
                className="inline-block border placeholder: text-blue-800 bg-gray-200 shadow-gray-100 border-gray-200 my-2 p-2 h-8 rounded-md w-full focus:outline-none focus:border-violet-600 "
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
            </div>
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
            <div className="flex justify-between">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_-QMHfYRJLbTpVwry2P9ngVKQlWVqHChVw&s"
                className="w-8 h-8 mt-2 mx-2 rounded-full"
                alt=""
              />
              <input
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 character long",
                  },
                })}
                className="inline-block border bg-gray-200 shadow-gray-100 border-gray-200 my-2 p-2 h-8 rounded-md w-full focus:outline-none focus:border-violet-400"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
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
        <button
          className="w-full flex items-center justify-center gap-2 rounded-lg my-4 text-green-700 font-bold border border-gray-200 py-2"
          onClick={() => signIn("google")}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
