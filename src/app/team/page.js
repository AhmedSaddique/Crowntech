"use client";
import Aboutceo from "@/Component/AboutCEO";
import CeoMessage from "@/Component/Ceomessage";
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import Hero from "@/Component/HomeHero";
import LayoutProvider from "@/Component/LayoutProvider";
import Team from "@/Component/Team";
import React, { useContext } from "react";

const TeamMain = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <Hero
        heading={"Crown International Technology"}
        title={
          "“Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress.”"
        }
        btn1={"Contact Us"}
        btn2={"Learn More"}
      />
      <Aboutceo />
      <CeoMessage />
      <Team />
      <Footer />
    </LayoutProvider>
  );
};

export default TeamMain;
