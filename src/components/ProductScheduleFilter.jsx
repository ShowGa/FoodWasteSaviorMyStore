import React, { useState } from "react";
// MUI
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
// toast
import toast from "react-hot-toast";
// service
import PackageService from "../service/packageService";

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
const switchStyle = {
  // "& .MuiSwitch-thumb": {
  //   backgroundColor: "rgb(230, 153, 0)",
  // },
  "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
    backgroundColor: "rgb(230, 153, 0)",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "rgb(241, 165, 0)",
  },
};

const ProductScheduleFilter = ({ weekday, schedule, setPostedSchedules }) => {
  const [isChanged, setIsChanged] = useState(false);
  const [formData, setFormData] = useState(schedule);
  console.log(isChanged);

  // ======================= //
  // Helper Functions
  // ======================= //
  const handleUpdateSubmit = () => {
    if (!isChanged) {
      toast.error("請先更新資料");
      return;
    }

    // take off rulesId
    const { rulesId, ...rest } = formData;

    PackageService.updatePackageSchedule(rulesId, rest)
      .then((res) => {
        handleUpdatePostedSchedules(res.data.data);
        setFormData(res.data.data);
        setIsChanged(false);
        toast.success("更新成功");
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  // change the postedSchedules state
  const handleUpdatePostedSchedules = (newSchedule) => {
    setPostedSchedules((prev) => {
      return prev.map((item) =>
        item.rulesId === newSchedule.rulesId ? newSchedule : item
      );
    });
  };

  const handleFormDataChange = (e) => {
    if (e.target.name === "isActive") {
      setFormData({ ...formData, isActive: e.target.checked });
    } else if (e.target.name === "quantity") {
      setFormData({ ...formData, quantity: parseInt(e.target.value) });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    setIsChanged(true);
  };

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
                name="isActive"
                color="primary"
                checked={formData.isActive}
                sx={switchStyle}
                onChange={handleFormDataChange}
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
            name="quantity"
            value={formData.quantity}
            sx={textFieldStyle}
            onChange={handleFormDataChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <TextField
            label="商品領取開始時間"
            variant="outlined"
            name="pickupStartTime"
            value={formData.pickupStartTime}
            sx={textFieldStyle}
            onChange={handleFormDataChange}
          />
          <span> ~ </span>
          <TextField
            label="商品領取結束時間"
            variant="outlined"
            name="pickupEndTime"
            value={formData.pickupEndTime}
            sx={textFieldStyle}
            onChange={handleFormDataChange}
          />
        </div>

        <button
          className={`text-white font-semibold px-4 py-2 rounded-md ${
            isChanged ? "bg-secondaryThemeHover" : "bg-gray-300"
          }`}
          onClick={handleUpdateSubmit}
        >
          更新
        </button>
      </div>
      {/* help me create a divider */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default ProductScheduleFilter;
