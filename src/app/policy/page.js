"use client"
import React, { useContext } from "react";
import LayoutProvider from "@/Component/LayoutProvider";
import PrivacyHero from "@/Component/PrivacyHero";
import Privacyinfo from "@/Component/PrivacyInfo";
import Footer from "@/Component/Footer";
import { NavbarContext } from "@/Component/ContextProvider";

const PrivacyPolicy = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <PrivacyHero />
      <Privacyinfo />
      <Footer />
    </LayoutProvider>
  );
};

export default PrivacyPolicy;
