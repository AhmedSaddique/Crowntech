"use client";
import React from "react";
import DashboardProvider from "@/Component/DashboardProvider";
import DashService from "@/Component/Dashboard/DashService";
import PrelineScript from "@/Component/PrelineScript";

const Service = () => {

  return (
    <>
      <DashboardProvider>
        <DashService/>
        <PrelineScript />
      </DashboardProvider>
    </>
  );
};

export default Service;
