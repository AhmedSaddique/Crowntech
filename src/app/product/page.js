"use client"
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import ProductHero from "@/Component/ProductHero";
import React, { useContext } from "react";

const Product = () => {
  const { Header } = useContext(NavbarContext);

  return (
    <LayoutProvider>
      <Header />
      <ProductHero />
      <Footer />
    </LayoutProvider>
  );
};

export default Product;
