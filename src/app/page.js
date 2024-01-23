"use client"
import Brand from "@/Component/Brand";
import Hero from "@/Component/HomeHero";
import Information from "@/Component/Information";
import LayoutProvider from "@/Component/LayoutProvider";
import Technology from "@/Component/Technology";
import imagevideo from '../../public/assets/images/imgvideo.png'
import { DiGoogleCloudPlatform } from 'react-icons/di'
import Testimonial from "@/Component/Testimonial";
import Footer from "@/Component/Footer";
import { NavbarContext } from "@/Component/ContextProvider";
import { useContext, useEffect, useState } from "react";
import Preloader from "@/Component/Preloader";

export default function Home() {
  const { Header } = useContext(NavbarContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
    {loading ? (
   <Preloader />
 ) : (
 <LayoutProvider>
    <Header/>
    <Hero
    heading={"Crown International Technology"}
    title={'“Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress.”'}
    btn1={'Contact Us'}
    btn2={'Learn More'}
    
    />
    <Brand/>
    <Technology/>
    <Information
          image={imagevideo}
          badge={"Mission"}
          title={'Our Mission'}
          para={'Crown International Technology’s aim is to empower people, businesses, and organisations throughout the world by utilising cutting-edge digital technology. We work hard to provide cutting-edge solutions that boost productivity, connection, and efficiency while promoting sustainable growth. We strive to change the digital environment, inspire technical innovation, and enable our clients to succeed in the constantly changing digital era through our knowledge, creativity, and unrelenting pursuit of excellence.'}
          link={`/about`}
          starticon={<DiGoogleCloudPlatform size={25} />}
          button={'Learn More'}
        />
  <Testimonial/>
  <Footer/>
  </LayoutProvider>

)}
</>    
)
}