import React from "react";
// react router
import { Link } from "react-router-dom";
// react icon
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
// component
import GoogleOAuth from "../GoogleOAuth";

const RegisterStep = () => {
  return (
    <section className="flex justify-center items-center flex-1 h-full">
      <div className="form_container w-full max-w-[20rem]">
        <h2 className="text-3xl font-extrabold">MyStore 註冊</h2>
        <span className="text-sm text-gray-400">使用外部驗證服務註冊</span>

        {/* Divider */}
        <div className="p-divider">
          <div className="p-divider_line"></div>
          <span className="text-sm text-gray-400">外部驗證服務</span>
          <div className="p-divider_line"></div>
        </div>

        {/* OAuth */}
        <div className="flex flex-col gap-4">
          <GoogleOAuth />
          <button className="c-OAuth_btn">
            <IoLogoApple className="text-2xl" />
            <span>使用 Apple 註冊</span>
          </button>
        </div>

        <div className="flex flex-col gap-1 mt-4 text-sm">
          <div>
            <span>已經有帳號了嗎？</span>
            <Link className="text-blue-500 hover:underline" to="/mystore-login">
              登入帳號
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterStep;
