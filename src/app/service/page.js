"use client"
import { NavbarContext } from "@/Component/ContextProvider";
import Footer from "@/Component/Footer";
import LayoutProvider from "@/Component/LayoutProvider";
import ServiceHero from "@/Component/ServiceHero";
import { useRouter } from "next/navigation";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const Service = () => {
  const { Header } = useContext(NavbarContext);
  const [serviceInfo, setServiceInfo] = useState(null);
  const [serviceInfoId, setServiceInfoId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id'); // Assuming the URL parameter is 'id'

      if (id) {
        setServiceInfoId(id);
        axios.get(`/api/serviceinfo/${id}`)
          .then(response => setServiceInfo(response.data))
          .catch(error => console.error('Error fetching service info:', error));
      }
    }
  }, []);

  return (
    <LayoutProvider>
      <Header />
      <ServiceHero serviceInfoId={serviceInfoId} serviceInfo={serviceInfo} />
      <Footer />
    </LayoutProvider>
  );
};

export default Service;