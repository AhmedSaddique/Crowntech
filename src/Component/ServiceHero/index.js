"use client";
import { useState, useEffect } from "react";
import { HeadingH1, HeadingH3, HeadingH4, HeadingH6 } from "../Heading";
import { Para14, Para16, Para18 } from "../ParaGraph";
import { useTheme } from "next-themes";
import { Anchor, Tabs } from "antd";
import { SiGnuprivacyguard } from "react-icons/si";
import NextLink from "next/link"; // Rename it to NextLink
import Container from "../Container";
import { MdContactSupport } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import Plan from "../Plan";
import Faq from "../Faq";
import axios from "axios";
import ServiceTab from "../ServiceTab";

const ServiceHero = ({ serviceInfoId }) => {
  const [serviceInfo, setServiceInfo] = useState(null);
  const [activeinfoId, setActiveinfoId] = useState(null);

  useEffect(() => {
    // Check if window is defined (ensures SSR compatibility)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id"); // Assuming your URL parameter is named 'id'

      console.log("Service Info ID from URL:", id); // Console log the ID from URL

      if (id) {
        axios.get(`/api/serviceinfo/${id}`)
          .then((response) => {
            setServiceInfo(response.data);
            console.log("Fetched Service Info Data:", response.data); // Console log the fetched data
          })
          .catch((error) => console.error("Error:", error));
      }
    }
  }, []);

  const [showCard, setShowCard] = useState(true);
  const { Link } = Anchor;
  useEffect(() => {
    const handleResize = () => {
      setShowCard(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };
  const closeCard = () => {
    setShowCard(false);
  };
  const { theme, setTheme } = useTheme();

  const tabshow = [
    { id: "1", href: "#service", title: "Service" },
    { id: "2", href: "#media", title: "Contant" },
    { id: "3", href: "#plan", title: "Plan" },
    { id: "4", href: "#faq", title: "Faq's" },
  ];
  const tablink = [
    {
      id: "1",
      href: "/policy",
      title: "Privacy Policy",
      icon: <SiGnuprivacyguard size={20} />,
    },
    {
      id: "2",
      href: "/support",
      title: "Support",
      icon: <MdContactSupport size={20} />,
    },
    {
      id: "3",
      href: "/contact",
      title: "Contact",
      icon: <BiSolidContact size={20} />,
    },
  ];

  return (
    <>
      <Container className="p-2 md:p-0   flex justify-end ">
        <div className="p-2 block md:hidden rounded-lg bg-primary-blue100 ">
          <RiMenu4Line
            className={!showCard ? "visible" : "hidden"}
            size={25}
            onClick={toggleCard}
          />
          <RiCloseLine
            className={showCard ? "visible" : "hidden"}
            size={25}
            onClick={toggleCard}
          />
        </div>
      </Container>

      <div className="flex flex-wrap md:flex-nowrap p-1">
        <div className={`w-full md:w-2/12 `}>
          {showCard && (
            <div className="block md:hidden shadow-lg rounded-md backdrop-blur-3xl w-full pb-20  p-3 h-full overflow-hidden overflow-y-scroll max-h-[84vh] sticky top-40 no-scrollbar">
              <HeadingH6
                className={`${
                  theme === "dark"
                    ? "text-primary-white"
                    : " text-primary-black"
                } p-2`}
                title={"Table of Content"}
              />
              <Anchor
                affix={false}
                onClick={closeCard}
                className={theme === "dark" ? "light-theme" : " dark-theme"}
              >
                {tabshow.map((items, index) => (
                  <Link
                    key={items.id || index + 1}
                    href={items.href}
                    title={items.title}
                  />
                ))}
              </Anchor>
              <hr className="mt-5" />
              <div className={` text-16 font-medium p-3 space-y-3`}>
                {tablink.map((items, index) => (
                  <NextLink
                    key={items.id || index + 1}
                    className={` ${
                      theme === "dark"
                        ? " hover:text-primary-blue100"
                        : "hover:text-primary-blue100"
                    } flex gap-2`}
                    href={`${items.href}`}
                  >
                    {items.icon}
                    {items.title}
                  </NextLink>
                ))}
              </div>
            </div>
          )}
          <div className="hidden md:block shadow-lg rounded-md backdrop-blur-3xl w-full pb-20 md:w-full p-3 h-full overflow-hidden overflow-y-scroll max-h-[84vh] sticky top-40 no-scrollbar">
            <HeadingH6
              className={`${
                theme === "dark" ? "text-primary-white" : " text-primary-black"
              } p-2`}
              title={"Table of Content"}
            />
            <Anchor
              affix={false}
              className={theme === "dark" ? "light-theme" : " dark-theme"}
            >
              {tabshow.map((items, index) => (
                <Link
                  key={items.id || index + 1}
                  href={items.href}
                  title={items.title}
                />
              ))}
            </Anchor>
            <hr className="mt-5" />
            <div className={` text-16 font-medium p-3 space-y-3`}>
              {tablink.map((items, index) => (
                <NextLink
                  key={items.id || index + 1}
                  className={` ${
                    theme === "dark"
                      ? " hover:text-primary-blue100"
                      : " hover:text-primary-blue100"
                  } flex gap-2`}
                  href={`${items.href}`}
                >
                  {items.icon}
                  {items.title}
                </NextLink>
              ))}
            </div>
          </div>
        </div>

        <Container className={`w-full md:w-10/12 `}>
          <div className={`p-1 md:p-3 space-y-10  `}>
            <div id="service">
              <div className={`pt-5 w-full `}>
                <div className="space-y-4 ">
                  <Para18
                    className={"font-bold text-justify"}
                    title={"________ Service"}
                  />
                  <div className="-space-y-3">
                    <HeadingH1 title={"Advanced analytics to grow "} />
                    <HeadingH1 title={"your business"} />
                  </div>
                  <Para16
                    title={
                      "Collaborate, plan projects and manage resources with powerful features that your whole team can use."
                    }
                  />
                  <Para16
                    title={
                      " The latest news, tips and advice to help you run your business with less fuss."
                    }
                  />
                </div>
              </div>
            </div>

            <div id="media">
              <ServiceTab activeinfoId={activeinfoId}/>
            </div>

            {/* <div id="plan" className='mt-5'>
              <Plan/>
          </div>
          <div id="faq" className='mt-5'>
              <Faq/>
          </div> */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServiceHero;
