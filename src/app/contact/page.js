"use client"
import ContactForm from "@/Component/ContactForm";
import ContactHero from "@/Component/ContactHero";
import ContactInfo from "@/Component/ContactInfo";
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import Newsletter from "@/Component/Newsletter";
import React, { useContext } from "react";

const Contact = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <>
      <LayoutProvider>
        <Header />
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <Newsletter />
        <Footer />
      </LayoutProvider>
    </>
  );
};

export default Contact;
