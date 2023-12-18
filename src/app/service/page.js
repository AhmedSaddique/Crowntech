"use client"
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import ServiceHero from "@/Component/ServiceHero";
import React, { useContext } from "react";

const Service = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <ServiceHero />
      <Footer />
    </LayoutProvider>
  );
};

export default Service;
