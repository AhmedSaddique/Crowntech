"use client";
import { useState, useEffect } from "react";
import { HeadingH1, HeadingH6 } from "../Heading";
import {  Para16, Para18 } from "../ParaGraph";
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
import { UseidContext } from "../ServiceContext";

const ServiceHero = () => {
  const [serviceInfo, setServiceInfo] = useState(null);
  const [serviceTabId, setServiceTabId] = useState(null);
  const [serviceplanId, setServiceplanId] = useState(null);
  const { id } = UseidContext();

  useEffect(() => {
    // Fetch serviceInfo data based on id from context
    const fetchServiceInfo = async () => {
      try {
        const response = await axios.get(`/api/serviceinfo`);
        // Filter serviceInfo based on id
        const filteredServiceInfo = response.data.serviceinfos.filter(
          (service) => service.id === id
        );
        setServiceInfo(filteredServiceInfo);
      } catch (error) {
        console.error("Error getting service info:", error);
      }
    };

    fetchServiceInfo();
  }, [id]);

  const [showCard, setShowCard] = useState(true);
  const { Link } = Anchor;

  const toggleCard = () => {
    setShowCard((prev) => !prev);
  };
  const closeCard = () => {
    setShowCard(false);
  };

  const tabshow = [
    { id: "1", href: "#service", title: "Service" },
    { id: "2", href: "#media", title: "More Information" },
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
                className={` p-2`}
                title={"Table of Content"}
              />
              <Anchor
                affix={false}
                onClick={closeCard}
                className={'light-theme'}
              >
                {tabshow.map((anch, index) => (
                  <Link
                    key={anch.id || index + 1}
                    href={anch.href}
                    title={anch.title}
                  />
                ))}
              </Anchor>
              <hr className="mt-5" />
              <div className={` text-16 font-medium p-3 space-y-3`}>
                {tablink.map((anch, index) => (
                  <NextLink
                    key={anch.id || index + 1}
                    className={` hover:text-primary-blue100 flex gap-2`}
                    href={`${anch.href}`}
                  >
                    {anch.icon}
                    {anch.title}
                  </NextLink>
                ))}
              </div>
            </div>
          )}
          <div className="hidden md:block shadow-lg rounded-md backdrop-blur-3xl w-full pb-20 md:w-full p-3 h-full overflow-hidden overflow-y-scroll max-h-[84vh] sticky top-40 no-scrollbar">
            <HeadingH6
              className={` p-2`}
              title={"Table of Content"}
            />
            <Anchor
              affix={false}
              className={"light-theme"}
            >
              {tabshow.map((anch, index) => (
                <Link
                  key={anch.id || index + 1}
                  href={anch.href}
                  title={anch.title}
                />
              ))}
            </Anchor>
            <hr className="mt-5" />
            <div className={` text-16 font-medium p-3 space-y-3`}>
              {tablink.map((anch, index) => (
                <NextLink
                  key={anch.id || index + 1}
                  className={` hover:text-primary-blue100 flex gap-2`}
                  href={`${anch.href}`}
                >
                  {anch.icon}
                  {anch.title}
                </NextLink>
              ))}
            </div>
          </div>
        </div>

        <Container className={`w-full md:w-10/12 `}>
          <div className={`p-1 md:p-3 space-y-10  `}>
            <div id="service">
              {serviceInfo !== null ? (
                serviceInfo.map((service, index) => (
                  <div className={`pt-5 w-full `} key={index}>
                    <div className="space-y-4 ">
                      <Para18
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.1 }}
                        className={"font-bold text-justify"}
                        title={"________ Service"}
                      />
                      <div className="-space-y-3">
                        <HeadingH1
                          initial={{ opacity: 1, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.1 }}
                          title={service.serviceName}
                        />
                      </div>
                      <Para16
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.1 }}
                        title={service.serviceText}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading service information...</p>
              )}
            </div>

            <div id="media">
              <ServiceTab setServiceTabId={setServiceTabId} />
            </div>

            <div id="plan" className="mt-5">
              <Plan
                serviceTabId={serviceTabId}
                setServiceplanId={setServiceplanId}
              />
            </div>
            <div id="faq" className="mt-5">
              <Faq serviceplanId={serviceplanId} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ServiceHero;
