"use client"
import React, { useContext } from "react";
import LayoutProvider from "@/Component/LayoutProvider";
import SignUpForm from "@/Component/SignUpForm";
import Footer from "@/Component/Footer";
import { NavbarContext } from "@/Component/ContextProvider";

const SignUp = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <SignUpForm />
      <Footer />
    </LayoutProvider>
  );
};

export default SignUp;
