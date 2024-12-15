import React, { useState } from "react";
// react router dom
import { Outlet, Navigate } from "react-router-dom";
// components
import SideBar from "../components/SideBar";
// zustand
import useAuthStore from "../zustand/useAuthStore";

const Layout = () => {
  const { authStore } = useAuthStore();

  if (!authStore) {
    return <Navigate to="/mystore-login" />;
  }

  return (
    <main className="min-h-screen">
      <div className="flex h-auto">
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
