import React, { useState } from "react";
// assets
import { img1 } from "../assets";
// components
import SideBarItem from "./SideBarItem";
// icons
import { MdSpaceDashboard } from "react-icons/md";

// delete after connect to backend
const items = [
  {
    to: "/store/1",
    title: "Dashboard",
    icon: <MdSpaceDashboard className="text-2xl" />,
  },
  {
    to: "/store/2",
    title: "Products",
    icon: <MdSpaceDashboard className="text-2xl" />,
  },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(items[0].title);

  return (
    <div className="border-r-2 border-gray-200 px-2 w-[17rem] h-full">
      <div className="flex justify-center items-center my-10">
        <img src={img1} alt="logo" className="w-14 h-14 rounded-full" />
      </div>

      <div className="flex flex-col">
        <span className="ml-4 text-gray-400 text-sm font-semibold">
          Store Navigation
        </span>
        {items.map((item, index) => (
          <SideBarItem
            key={index}
            props={item}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
