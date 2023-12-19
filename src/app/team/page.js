"use client"
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import Team from "@/Component/Team";
import TeamHero from "@/Component/TeamHero";
import Technology from "@/Component/Technology";
import React, { useContext } from "react";

const TeamMain = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <TeamHero />
      <Technology />
      <Team />
      <Footer />
    </LayoutProvider>
  );
};

export default TeamMain;
