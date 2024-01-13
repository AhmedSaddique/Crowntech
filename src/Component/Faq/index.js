"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { HeadingH1, HeadingH6 } from "../Heading";
import { Para14 } from "../ParaGraph";
import { useTheme } from "next-themes";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import FaqImg from "../FaqImg";
import { TbDevicesQuestion } from "react-icons/tb";
import axios from "axios";
const Faq = ({serviceplanId}) => {
  // console.log("Service plan id for faq" , serviceplanId)
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const [servicefaq, setservicefaq] = useState([]);
  const [filteredServicefaq, setFilteredServicefaq] = useState([]);

  useEffect(() => {
    if (serviceplanId) {
      const fetchAllServiceplans = async () => {
        try {
          const response = await axios.get("/api/servicefaq");
          setservicefaq(response.data.servicefaqs); // Corrected to serviceplans
          // console.log("All Service faqqqqqq:", response.data.servicefaqs);
        } catch (error) {
          console.error('Error getting service plans:', error);
        }
      };
      fetchAllServiceplans();
    }
  }, [serviceplanId]);

  useEffect(() => {
    const filteredData = servicefaq.filter(faq => faq.plan.tabId === serviceplanId);
    setFilteredServicefaq(filteredData);
    // console.log("Filtered Service Faq:", filteredData);
   
  }, [servicefaq, serviceplanId]);

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const handleCombinedClick = (index) => {
    toggleAccordion(index);
    setActiveTab(index);
  };

    // Check if there is any item with a non-empty title
    const hasValidTitle = filteredServicefaq.some(faq => faq.heading && faq.heading.trim() !== '');

  return (
    <>
    {
      hasValidTitle ? (
<div className="bg-faq bg-no-repeat bg-right-top ">
        <Container>
          <div className="pt-32 ">
            <HeadingH1 initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }} title={"Frequently asked questions"} />
          </div>
          {/* ... other static elements ... */}
          <div className="flex pt-10 md:gap-0 lg:gap-4 flex-wrap sm:flex-nowrap">
            <div className="w-full sm:w-5/12">
              {filteredServicefaq.map((item, index) => (
                <div
                  key={item.id}
                  className={`rounded-md ${
                    openAccordionIndex === index
                      ? "bg-transparent shadow-xl"
                      : ""
                  } mt-7 mb-7 transition duration-300`}
                >
                  <button
                    onClick={() => handleCombinedClick(index)}
                    className={`w-full text-left p-2 rounded-md flex justify-between items-center ${
                      openAccordionIndex === index ? "" : ""
                    }`}
                  >
                    <span className={`font-medium flex relative`}>
                      <TbDevicesQuestion
                        className="relative hover:scale-105 duration-300 transition bottom-0 md:bottom-8 right-0 md:right-8"
                        size={30}
                      />
                      <HeadingH6 initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
                        className="relative right-0 md:right-6 pt-3"
                        title={item.heading}
                      />
                    </span>
                    <span>
                      {openAccordionIndex === index ? (
                        <MdOutlineKeyboardArrowUp size={25} />
                      ) : (
                        <MdOutlineKeyboardArrowDown size={25} />
                      )}
                    </span>
                  </button>
                  {openAccordionIndex === index && (
                    <div className="p-2 relative bottom-4">
                      <Para14 initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }} title={item.description} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full sm:w-7/12 flex justify-center items-center">
              {servicefaq[activeTab] && (
                <FaqImg image={servicefaq[activeTab].Faqimage} />
              )}
            </div>
          </div>
        </Container>
      </div>
      ) : (
        <></>
      )
    }
      
    </>
  );
};

export default Faq;
