import React, { useState } from "react";
// MUI
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

const ProductScheduleFilter = ({ dateInWeek }) => {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      {/* title */}
      <h3 className="text-lg font-semibold">{dateInWeek}</h3>

      {/* switch */}
      <div className="flex items-center gap-6 mb-4">
        <div>
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                name="checked"
                color="primary"
              />
            }
            label={`${checked ? "開啟" : "關閉"}`}
          />
        </div>

        <div>
          <TextField id="outlined-basic" label="Quantity" variant="outlined" />
        </div>

        <div className="flex items-center gap-2">
          <TextField
            id="outlined-basic"
            label="Collection Time Start"
            variant="outlined"
          />
          <span> ~ </span>
          <TextField
            id="outlined-basic"
            label="Collection Time End"
            variant="outlined"
          />
        </div>
      </div>
      {/* help me create a divider */}
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default ProductScheduleFilter;
