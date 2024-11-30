import React, { useState } from "react";
// react router dom
import { Outlet } from "react-router-dom";
// components
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <main className="h-screen">
      <div className="flex h-full">
        <SideBar />
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;

/*

=========== note ============
1. Outlet set the container with with max-width: 100% and width: 100%

*/
