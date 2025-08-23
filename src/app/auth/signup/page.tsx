import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="w-full text-blue-950">
        <div className="w-9/10 bg-gray-200 mx-6 grid grid-cols-2 border shadow-gray-200 border-gray-300 h-8 rounded-full">
          <div className="w-full text-center rounded-full font-semibold">
            <Link href="/auth/login">Sign In</Link>
          </div>
          <div className="w-full bg-white  text-center rounded-full font-extrabold">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
