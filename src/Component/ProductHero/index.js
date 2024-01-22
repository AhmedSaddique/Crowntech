"use client";
import { useState, useEffect } from "react";
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH6,
} from "../Heading";
import { Para14, Para16, Para18 } from "../ParaGraph";
import { Anchor, Tabs } from "antd";
import { SiGnuprivacyguard } from "react-icons/si";
import NextLink from "next/link"; // Rename it to NextLink
import Container from "../Container";
import { MdContactSupport } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";

import { tabdata } from "../Constants";
import Image from "next/image";
const { TabPane } = Tabs;

const { Link } = Anchor;

const ProductHero = () => {
  const [showCard, setShowCard] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowCard(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
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

  const tabshow = [
    { id: "1", href: "#product", title: "Product" },
    { id: "2", href: "#all", title: "All" },
    { id: "2", href: "#reco", title: "Recommended" },
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
              <HeadingH6 className={` p-2`} title={"Table of Content"} />
              <Anchor
                affix={false}
                onClick={closeCard}
                className={"light-theme"}
              >
                {tabshow.map((array, index) => (
                  <Link key={index} href={array.href} title={array.title} />
                ))}
              </Anchor>
              <hr className="mt-5" />
              <div className={` text-16 font-medium p-3 space-y-3`}>
                {tablink.map((array, index) => (
                  <NextLink
                    key={index}
                    className={` hover:text-primary-blue100 flex gap-2`}
                    href={`${array.href}`}
                  >
                    {array.icon}
                    {array.title}
                  </NextLink>
                ))}
              </div>
            </div>
          )}
          <div className="hidden md:block shadow-lg rounded-md backdrop-blur-3xl w-full pb-20 md:w-full p-3 h-full overflow-hidden overflow-y-scroll max-h-[84vh] sticky top-40 no-scrollbar">
            <HeadingH6 className={` p-2`} title={"Table of Content"} />
            <Anchor affix={false} className={"light-theme"}>
              {tabshow.map((array, index) => (
                <Link key={index} href={array.href} title={array.title} />
              ))}
            </Anchor>
            <hr className="mt-5" />
            <div className={` text-16 font-medium p-3 space-y-3`}>
              {tablink.map((array, index) => (
                <NextLink
                  key={index}
                  className={` hover:text-primary-blue100 flex gap-2`}
                  href={`${array.href}`}
                >
                  {array.icon}
                  {array.title}
                </NextLink>
              ))}
            </div>
          </div>
        </div>

        <Container className={`w-full md:w-10/12 `}>
          <div className={`p-1 md:p-3 space-y-10 `}>
            <div id="product" className="">
              <div className={`pt-5 w-full `}>
                <div className="space-y-4 ">
                  <Para18
                    className={"font-bold text-justify"}
                    title={"________ PRODUCT"}
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

            <div id="all" className="pt-20 pb-20 space-y-4">
              <HeadingH3 title={"All Product"} />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {tabdata.map((array, index) => (
                  <NextLink
                    href="/product"
                    key={index}
                    className={` hover:bg-primary-blue100 p-2 shadow-2xl  dark:hover:bg-primary-blue100 dark:hover:text-white space-y-2 dark:shadow  hover:scale-105 transition duration-300 text-center pt-5 pb-5  rounded-md `}
                  >
                    <Image
                      className="w-[50px] mx-auto"
                      src={array.image}
                      alt={array.image}
                    />
                    <HeadingH6 title={array.title} />
                    <Para14 title={array.text} />
                  </NextLink>
                ))}
              </div>
            </div>

            <div id="reco" className="pb-20 space-y-4">
              <HeadingH3 title={"Recommend"} />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {tabdata.map((array, index) => (
                  <NextLink
                    href="/product"
                    key={index}
                    className={` hover:bg-primary-blue100 p-2 shadow-2xl dark:hover:bg-primary-blue100 dark:hover:text-white space-y-2 dark:shadow  hover:scale-105 transition duration-300 text-center pt-5 pb-5  rounded-md `}
                  >
                    <Image
                      className="w-[50px] mx-auto"
                      src={array.image}
                      alt={array.image}
                    />
                    <HeadingH6 title={array.title} />
                    <Para14 title={array.text} />
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductHero;
