"use client"
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import LoginForm from "@/Component/LoginForm";
import React, { useContext } from "react";

const Login = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <LoginForm />
      <Footer />
    </LayoutProvider>
  );
};

export default Login;
