"use client"
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import ServiceHero from "@/Component/ServiceHero";

const Service = () => {
  const { Header } = useContext(NavbarContext);
  const [serviceInfo, setServiceInfo] = useState(null);

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== 'undefined') {
      // Extract the ID from the URL query string
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');

      // Console log the retrieved ID
      console.log("Retrieved ID from URL:", id);

      if (id) {
        // Fetch service information using the extracted ID
        axios.get(`/api/serviceinfo/${id}`)
          .then(response => {
            setServiceInfo(response.data);
          })
          .catch(error => {
            console.error('Error fetching service info:', error);
          });
      }
    }
  }, []);

  return (
    <LayoutProvider>
      <Header />
      <ServiceHero serviceInfoId={serviceInfo ? serviceInfo.id : null} serviceInfo={serviceInfo} />
      <Footer />
    </LayoutProvider>
  );
};

export default Service;
