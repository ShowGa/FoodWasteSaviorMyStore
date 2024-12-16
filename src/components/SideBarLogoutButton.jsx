import React from "react";
// react router
import { useNavigate } from "react-router-dom";
// react icon
import { FaSignOutAlt } from "react-icons/fa";
// zustand
import useAuthStore from "../zustand/useAuthStore";
import useAuthJWTStore from "../zustand/useAuthJWTStore";
// react toast
import toast from "react-hot-toast";

const SideBarLogoutButton = () => {
  const navigate = useNavigate();
  const { logoutSetAuthStore } = useAuthStore();
  const { logoutSetAuthJWT } = useAuthJWTStore();

  const handleLogout = () => {
    logoutSetAuthStore();
    logoutSetAuthJWT();
    toast.success("登出成功");
    navigate("/mystore-login");
  };

  return (
    <li
      className={`rounded-md mt-1 py-[0.75rem] px-[1rem] w-full hover:bg-gray-200 cursor-pointer`}
      onClick={handleLogout}
    >
      <div className="ml-[0.25rem] flex items-center gap-2">
        <FaSignOutAlt className="text-2xl" />
        <span className="font-semibold">登出</span>
      </div>
    </li>
  );
};

export default SideBarLogoutButton;
