"use client"
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import ServiceHero from "@/Component/ServiceHero";
import ServiceContext from '@/Component/ServiceContext';

const Service = () => {
  const { Header } = useContext(NavbarContext);
 
  return (
    <LayoutProvider>
      <Header />
      <ServiceContext>
      <ServiceHero />
      </ServiceContext>
      <Footer />
    </LayoutProvider>
  );
};

export default Service;
