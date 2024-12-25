import React, { useState } from "react";
// react router dom
import { Link } from "react-router-dom";
// assets
import { Logobg } from "../assets";
// components
import SideBarItem from "./SideBarItem";
import SideBarLogoutButton from "./SideBarLogoutButton";
// icons
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { MdPending } from "react-icons/md";

// zustand
import useAuthStore from "../zustand/useAuthStore";

// delete after connect to backend
const items = [
  {
    to: "dashboard",
    title: "總覽",
    icon: <MdSpaceDashboard className="text-2xl" />,
  },
  {
    to: "orders",
    title: "已確認訂單",
    icon: <IoIosListBox className="text-2xl" />,
  },
  {
    to: "orders/pending",
    title: "待確認訂單",
    icon: <MdPending className="text-2xl" />,
  },
];

const SideBar = () => {
  const { authStore } = useAuthStore();

  const [activeTab, setActiveTab] = useState(items[0].title);

  return (
    <div className="border-r-2 border-gray-200 px-2 w-[18rem] relative">
      <div className="sticky top-0 min-h-screen">
        <div className="flex justify-center items-center py-10">
          <img src={Logobg} alt="logo" className="w-16 h-16" />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <span className="ml-4 text-gray-400 text-sm font-semibold">
              導覽列
            </span>
            {items.map((item, index) => (
              <Link to={`/store/${authStore.storeId}/${item.to}`}>
                <SideBarItem
                  key={index}
                  itemInfo={item}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </Link>
            ))}
          </div>

          <div>
            <span className="ml-4 text-gray-400 text-sm font-semibold">
              功能鍵
            </span>
            <ul>
              <SideBarLogoutButton />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
