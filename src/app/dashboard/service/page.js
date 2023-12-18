"use client";
import React, { useContext } from "react";
import { SidebarContext } from "@/Component/ContextProvider";
import DashboardProvider from "@/Component/DashboardProvider";
import DashService from "@/Component/Dashboard/DashService";

const Service = () => {
  const { Sidebar } = useContext(SidebarContext);

  return (
    <>
      <DashboardProvider>
        <DashService/>
      </DashboardProvider>
    </>
  );
};

export default Service;
