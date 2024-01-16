"use client"
import React, { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import support from "../../../public/assets/images/support.jpg";
import SupportHero from "@/Component/SupportHero";
import Topics from "@/Component/SupportTopics";
import Information from "@/Component/Information";
import Blog from "@/Component/Blog";
import LayoutProvider from "@/Component/LayoutProvider";
import Footer from "@/Component/Footer";
import { NavbarContext } from "@/Component/ContextProvider";

const Support = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      
      <Header />
      <SupportHero />
      <Topics />
      <Information
        image={support}
        badge={"More help"}
        title={"Can’t find an answer?"}
        para={
          "Aenean velit nisl, aliquam eget diam eu, rhoncus tristique dolor.enean vulputate sodales urna ut vestibulum"
        }
        button={"Contact Us"}
        endicon={<BsArrowRightShort size={25} />}
        link={`/contact`}
      />
      <Blog />
      <Footer />
    </LayoutProvider>
  );
};

export default Support;
