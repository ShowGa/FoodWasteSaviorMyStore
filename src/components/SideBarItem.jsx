import React from "react";
// react router dom
import { Link } from "react-router-dom";

const SideBarItem = ({ props, activeTab, setActiveTab }) => {
  return (
    <li
      className={`rounded-md mt-1 py-[0.75rem] px-[1rem] w-full ${
        activeTab === props.title ? "bg-gray-200 text-primary" : ""
      } hover:bg-gray-200 cursor-pointer`}
      onClick={() => setActiveTab(props.title)}
    >
      <Link to={props.to} className="flex items-center gap-2">
        {props.icon}
        <span>{props.title}</span>
      </Link>
    </li>
  );
};

export default SideBarItem;
