import React from "react";
import { Link } from "react-router-dom";

function AuthHeader() {
  return (
    <div className="flex fixed  bg-white w-full  border-b border-gray-300">
      <div className="flex w-full max-w-[935px] px-5 cbp935:px-0 justify-between pt-[16px] pb-[11px] mx-auto">
        <div className="flex self-end logo">
          <a href="localhost:5173/">
            <img src="/logo-dark.svg" alt="" />
          </a>
        </div>
        <div className="flex gap-4 items-center font-bold text-sm leading-[18px]">
          <Link
            className="bg-blue-primary  tracking-tight hover:bg-blue-primary-hover focus:bg-blue-light  rounded-lg text-white px-4 py-[7px]"
            to="/accounts/login"
          >
            Log in
          </Link>

          <Link
            className=" tracking-tight text-blue-primary hover:text-blue-dark"
            to="/accounts/login"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthHeader;
