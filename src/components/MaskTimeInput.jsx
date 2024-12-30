import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

const MaskTimeInput = ({ value, onChange, label, name }) => {
  // 定義掩碼，格式為 HH:mm:ss
  const mask = "29:59:59"; // 限制最大值，暫時允許超範圍數字
  const maskChar = "0"; // 刪除時自動填充為 0

  return (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      value={value}
      onChange={onChange}
      formatChars={{
        2: "[0-2]", // 小時第一位允許 0-2
        9: "[0-9]", // 其他位置允許 0-9
        5: "[0-5]", // 分鐘與秒的第二位允許 0-5
      }}
      alwaysShowMask
    >
      {(inputProps) => (
        <TextField
          {...inputProps}
          label={label}
          variant="outlined"
          name={name}
          fullWidth
        />
      )}
    </InputMask>
  );
};

export default MaskTimeInput;
