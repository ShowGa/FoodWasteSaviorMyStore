import React from "react";
// react router
import { Link } from "react-router-dom";
// react icon
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
// component
import GoogleOAuth from "../GoogleOAuth";
// MUI
import { TextField, Button } from "@mui/material";

const customTextField = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "rgb(230, 153, 0)",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgb(230, 153, 0)",
  },
};

const customButton = {
  backgroundColor: "rgb(230, 153, 0)",
  "&:hover": {
    backgroundColor: "rgb(230, 153, 0)",
  },
};

const RegisterStep = () => {
  return (
    <section className="flex justify-center items-center flex-1 h-full">
      <div className="form_container w-full max-w-[20rem]">
        <h2 className="text-3xl font-extrabold">MyStore 註冊</h2>
        <span className="text-sm text-gray-400">使用外部驗證服務註冊</span>

        {/* OAuth */}
        <div className="flex flex-col gap-4">
          <GoogleOAuth />
          <button className="c-OAuth_btn">
            <IoLogoApple className="text-2xl" />
            <span>使用 Apple 註冊</span>
          </button>
        </div>

        {/* Divider */}
        <div className="p-divider">
          <div className="p-divider_line"></div>
          <span className="text-sm text-gray-400">或</span>
          <div className="p-divider_line"></div>
        </div>

        <form className="flex flex-col gap-4">
          {/* change the border or outline to this color bg-secondaryTheme hover:bg-secondaryThemeHover */}
          <TextField label="Email" type="email" sx={customTextField} />
          <TextField label="Password" type="password" sx={customTextField} />

          {/* change to this color bg-secondaryTheme hover:bg-secondaryThemeHover */}
          {/* custom sx */}
          <Button variant="contained" sx={customButton}>
            註冊
          </Button>
        </form>

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
