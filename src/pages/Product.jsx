import React, { useState } from "react";
// mui
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// icon
import { IoMdInformationCircle } from "react-icons/io";
import { AiFillSchedule } from "react-icons/ai";
// component
import ProductSchedule from "../components/ProductSchedule";
import ProductOverview from "../components/ProductOverview";

// TabInfo
const tabInfo = [
  {
    icon: <IoMdInformationCircle style={{ margin: 0, fontSize: "1.5rem" }} />,
    label: "商品資訊",
    value: "1",
  },
  {
    icon: <AiFillSchedule style={{ margin: 0, fontSize: "1.5rem" }} />,
    label: "銷售排程",
    value: "2",
  },
];

const Product = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="w-full">
      <div className="px-28 py-20">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "rgb(230, 153, 0)",
                  },
                }}
              >
                {tabInfo.map((tab) => (
                  <Tab
                    key={tab.value}
                    label={tab.label}
                    icon={tab.icon}
                    value={tab.value}
                    sx={{
                      "&.Mui-selected": {
                        color: "rgb(230, 153, 0)",
                      },
                      fontWeight: "bold",
                      fontSize: "1rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 1,
                    }}
                  />
                ))}
              </TabList>
            </Box>
            <TabPanel value="1">
              <ProductOverview />
            </TabPanel>
            <TabPanel value="2">
              <ProductSchedule />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </section>
  );
};

export default Product;
