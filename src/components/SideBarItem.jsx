import React from "react";

const SideBarItem = ({ itemInfo, activeTab, setActiveTab }) => {
  return (
    <li
      className={`rounded-md mt-1 py-[0.75rem] px-[1rem] w-full ${
        activeTab === itemInfo.title ? "bg-gray-200 text-primary" : ""
      } hover:bg-gray-200 cursor-pointer`}
      onClick={() => setActiveTab(itemInfo.title)}
    >
      <div className="flex items-center gap-2">
        {itemInfo.icon}
        <span>{itemInfo.title}</span>
      </div>
    </li>
  );
};

export default SideBarItem;
