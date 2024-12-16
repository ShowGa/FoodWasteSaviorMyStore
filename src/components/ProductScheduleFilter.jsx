import React, { useState } from "react";
// MUI
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    // "& fieldset": {
    //   borderColor: "#1976d2", // 非聚焦狀態的邊框顏色
    // },
    // "&:hover fieldset": {
    //   borderColor: "#1565c0", // 懸停時的邊框顏色
    // },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(230, 153, 0)", // 聚焦狀態的邊框顏色
    },
  },
  // 修改 label 顏色
  // "& .MuiInputLabel-root": {
  //   color: "#9e9e9e", // 非聚焦狀態的 label 顏色
  // },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "rgb(230, 153, 0)", // 聚焦狀態的 label 顏色
  },
};

const ProductScheduleFilter = ({ weekday, schedule }) => {
  return (
    <div>
      {/* title */}
      <h3 className="text-lg font-semibold">{weekday}</h3>

      {/* switch */}
      <div className="flex items-center gap-6 mb-4">
        <div>
          {/* change the switch color to secondaryTheme */}
          <FormControlLabel
            control={
              <Switch
                name="checked"
                color="primary"
                checked={schedule.isActive}
                sx={{
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "rgb(230, 153, 0)",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "rgb(241, 165, 0)",
                  },
                }}
              />
            }
            label={`${schedule.isActive ? "開啟" : "關閉"}`}
          />
        </div>

        <div>
          <TextField
            label="當日銷售數量"
            variant="outlined"
            type="number"
            value={schedule.quantity}
            sx={textFieldStyle}
          />
        </div>

        <div className="flex items-center gap-2">
          <TextField
            label="商品領取開始時間"
            variant="outlined"
            value={schedule.pickupStartTime}
            sx={textFieldStyle}
          />
          <span> ~ </span>
          <TextField
            label="商品領取結束時間"
            variant="outlined"
            value={schedule.pickupEndTime}
            sx={textFieldStyle}
          />
        </div>

        <button className="bg-secondaryThemeHover text-white font-semibold px-4 py-2 rounded-md">
          更新
        </button>
      </div>
      {/* help me create a divider */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default ProductScheduleFilter;
