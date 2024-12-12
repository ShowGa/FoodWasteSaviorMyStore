import React from "react";
// mui
import { TextField } from "@mui/material";

// create a custom text field style
const customTextFieldMiddle = {
  className: "w-full",
  variant: "filled",
  // disable the underline
  sx: {
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      border: "1px solid rgb(200, 200, 200)",
      borderBottom: "none",
      borderRadius: "0",
    },
    "& .MuiInputBase-root:after": {
      display: "none",
    },
    "& .MuiInputBase-root:before": {
      display: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(200, 200, 200)",
    },
  },
};
const customTextFieldTop = {
  className: "w-full",
  variant: "filled",
  sx: {
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      border: "1px solid rgb(200, 200, 200)",
      borderBottom: "none",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "& .MuiInputBase-root:after": {
      display: "none",
    },
    "& .MuiInputBase-root:before": {
      display: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(200, 200, 200)",
    },
  },
};
const customTextFieldBottom = {
  className: "w-full",
  variant: "filled",
  sx: {
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      border: "1px solid rgb(200, 200, 200)",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "& .MuiInputBase-root:after": {
      display: "none",
    },
    "& .MuiInputBase-root:before": {
      display: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(200, 200, 200)",
    },
  },
};

const Step2 = ({ formData, setFormData }) => {
  return (
    <>
      <h2 className="text-3xl">請告訴我們您的愛店地址</h2>
      <span className="text-md text-gray-400">透過地圖讓顧客快速找到您</span>

      <div className="w-full h-[25rem] rounded-2xl mt-10">
        <form>
          <TextField {...customTextFieldTop} label="郵遞區號" />
          <TextField {...customTextFieldMiddle} label="縣市" />
          <TextField {...customTextFieldMiddle} label="鄉鎮市區" />
          <TextField {...customTextFieldMiddle} label="街道、巷弄" />
          <TextField {...customTextFieldBottom} label="門牌號碼" />
        </form>

        {/* divider */}
        <div className="w-full h-[1px] bg-gray-300 my-10"></div>

        <div className="w-full h-[25rem] rounded-2xl mt-10 bg-gray-200">
          map
        </div>
      </div>
    </>
  );
};

export default Step2;
