"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UseidContext } from "../ServiceContext";
import { HeadingH4, HeadingH6 } from "../Heading";
import { Para12 } from "../ParaGraph";

const MegaData = ({ categoryId,onLinkClick }) => {
  const [serviceinfo, setserviceinfo] = useState([]);
  const [filteredServiceInfo, setFilteredServiceInfo] = useState([]);
  const { id, setid } = UseidContext();
  const router = useRouter();

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
    }
    return text;
  };

// Fetch service info
useEffect(() => {
  const fetchServiceInfo = async () => {
    try {
      const response = await axios.get(`/api/serviceinfo`);
      setserviceinfo(response.data.serviceinfos);
      // Optionally, handle setting the initial id here if needed
    } catch (error) {
      console.error("Error getting service info:", error);
    }
  };

  fetchServiceInfo();
}, [categoryId]);

// Filter service information based on category
useEffect(() => {
  const filteredData = serviceinfo.filter(service => service.categoryId === categoryId);
  setFilteredServiceInfo(filteredData);
}, [serviceinfo, categoryId]);

// Handle service click
const handleServiceClick = useCallback((serviceId) => {
  setid(serviceId);
  router.push(`/service/${serviceId}`);
}, [router]);
  return (
    <>
      <div className="flex items-center p-3 ">
        <HeadingH4 title={"Core Services"} />
      </div>
       {filteredServiceInfo.map((service, index) => (
        <div
          key={index}
          onClick={() => handleServiceClick(service.id)}
          className="flex flex-colh-full w-full  sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0 duration-300 transition gap-3 rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2 cursor-pointer"
        >
          <Image
            className="w-[30px] h-[30px] object-cover bg-center rounded-full"
            width={200}
            height={200}
            src={`/${service.serviceImage.replace("public/", "")}`}
            alt={`/${service.serviceImage.replace("public/", "")}`}
          />
          <div>
            <HeadingH6  title={service.serviceName} />
            <Para12
              title={truncateText(service.serviceText, 80)}
            />
          </div>
        </div>
      ))}
 
    </>
  );
};

export default MegaData;
