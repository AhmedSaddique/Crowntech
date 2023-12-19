"use client"
import { NavbarContext } from "@/Component/ContextProvider";
import DeveloperTeam from "@/Component/DeveloperTeam";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import TeamHero from "@/Component/TeamHero";
import Technology from "@/Component/Technology";
import React, { useContext } from "react";

const Developer = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <TeamHero />
      <Technology />
      <DeveloperTeam />
      <Footer />
    </LayoutProvider>
  );
};

export default Developer;
