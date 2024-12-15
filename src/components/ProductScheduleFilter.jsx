import React, { useState } from "react";
// MUI
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

const ProductScheduleFilter = ({ weekday, schedule }) => {
  return (
    <div>
      {/* title */}
      <h3 className="text-lg font-semibold">{weekday}</h3>

      {/* switch */}
      <div className="flex items-center gap-6 mb-4">
        <div>
          <FormControlLabel
            control={
              <Switch
                name="checked"
                color="primary"
                checked={schedule.isActive}
              />
            }
            label={`${schedule.isActive ? "開啟" : "關閉"}`}
          />
        </div>

        <div>
          <TextField
            label="Quantity"
            variant="outlined"
            type="number"
            value={schedule.quantity}
          />
        </div>

        <div className="flex items-center gap-2">
          <TextField
            label="Collection Time Start"
            variant="outlined"
            value={schedule.pickupStartTime}
          />
          <span> ~ </span>
          <TextField
            label="Collection Time End"
            variant="outlined"
            value={schedule.pickupEndTime}
          />
        </div>
      </div>
      {/* help me create a divider */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default ProductScheduleFilter;
