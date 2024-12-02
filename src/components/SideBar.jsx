import React, { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// assets
import { img1 } from "../assets";
// components
import SideBarItem from "./SideBarItem";
// icons
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";

// delete after connect to backend
const items = [
  {
    to: "dashboard",
    title: "Dashboard",
    icon: <MdSpaceDashboard className="text-2xl" />,
  },
  {
    to: "orders",
    title: "Orders",
    icon: <IoIosListBox className="text-2xl" />,
  },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(items[0].title);

  return (
    <div className="border-r-2 border-gray-200 px-2 w-[18rem] relative">
      <div className="sticky top-0 min-h-screen">
        <div className="flex justify-center items-center py-10">
          <img src={img1} alt="logo" className="w-14 h-14 rounded-full" />
        </div>

        <div className="flex flex-col">
          <span className="ml-4 text-gray-400 text-sm font-semibold">
            Store Navigation
          </span>
          {items.map((item, index) => (
            <Link to={`/store/${"123"}/${item.to}`}>
              <SideBarItem
                key={index}
                itemInfo={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
