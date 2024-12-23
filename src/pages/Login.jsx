import React from "react";
// react router dom
import { Link, Navigate } from "react-router-dom";
// zustand
import useAuthStore from "../zustand/useAuthStore";
// assets
import { img3 } from "../assets";
// icons
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
// css
import "../pages/css/pageCss.css";
// components
import GoogleOAuthLogin from "../components/GoogleOAuthLogin";

const Login = () => {
  // check if user is logged in
  const { authStore } = useAuthStore();
  if (authStore) {
    return <Navigate to={`/store/${authStore.storeId}/dashboard`} />;
  }

  return (
    <div>
      {/* logo */}
      <div className="absolute top-5 right-10 z-50">
        {/* <img src={logo} alt="logo" /> */}
        <h1 className="text-3xl font-extrabold">Logo</h1>
      </div>

      <div className="flex h-screen">
        {/* Image Container */}
        <section className="flex-1 max-md:hidden">
          <div className="p-img_container">
            <img src={img3} alt="handsome man" />
          </div>
        </section>

        {/* Form Container */}
        <section className="flex justify-center items-center flex-1 h-full">
          <div className="form_container w-full max-w-[20rem]">
            <h2 className="text-3xl font-extrabold">MyStore Login</h2>
            <span className="text-sm text-gray-400">Login with OAuth</span>

            {/* Divider */}
            <div className="p-divider">
              <div className="p-divider_line"></div>
              <span>OAuth</span>
              <div className="p-divider_line"></div>
            </div>

            {/* OAuth */}
            <div className="flex flex-col gap-4">
              <GoogleOAuthLogin />
              <button className="c-OAuth_btn">
                <IoLogoApple className="text-2xl" />
                <span>使用 Apple 登入</span>
              </button>
            </div>

            {/* Forgot Password & Create an Account */}
            <div className="flex flex-col gap-1 mt-4 text-sm">
              <div>
                <span>Don't have an account? </span>
                <Link
                  className="text-blue-500 hover:underline"
                  to="/mystore-register"
                >
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
