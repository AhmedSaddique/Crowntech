"use client";
import React, { useCallback, useEffect, useState } from "react";
import { HeadingH6 } from "../Heading";
import Image from "next/image";
import { Para14 } from "../ParaGraph";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UseidContext } from "../ServiceContext";

const HeaderServiceTab = () => {
  const [serviceinfo, setserviceinfo] = useState([]);
  const [filteredServiceInfo, setFilteredServiceInfo] = useState([]);
  const router = useRouter();
  const { id, setid } = UseidContext();
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Truncate text and add ellipsis
    }
    return text;
  };
  
  useEffect(() => {
    const fetchServiceInfo = async () => {
      try {
        const response = await axios.get(`/api/serviceinfo`);
        setserviceinfo(response.data.serviceinfos);
        const firstFilteredService = response.data.serviceinfos.find(service => service.id === id);
        if (firstFilteredService && firstFilteredService.id) {
          setid(firstFilteredService.id);
        }
      } catch (error) {
        console.error('Error getting service info:', error);
      }
    };

    fetchServiceInfo();
  }, [ setid]);



  const handleServiceClick = useCallback((serviceId) => {
    setid(serviceId);
    router.push(`/service/${serviceId}`);
  }, [setid, router]);

  return (
    <div className="overflow-y-scroll no-scrollbar xl:max-h-[400px] xxl:max-h-[550px]">
      <HeadingH6 className={"text-white"} title={"Recommended"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 p-2">
        {serviceinfo.map((service, index) => (
          <div key={index} onClick={() => handleServiceClick(service.id)}
            className="bg-primary-white hover:bg-primary-light hover:scale-105 cursor-pointer flex items-center transition duration-300 gap-2 p-3 shadow-lg text-primary-white rounded-md"
          >
            <Image
              className="w-[50px] h-[50px] rounded-[20px]"
              height={400}
              width={400}
              src={`/${service.serviceImage.replace("public/", "")}`}
              alt={`/${service.serviceImage.replace("public/", "")}`}
            />
            <div className="text-primary-black">
              <HeadingH6 title={service.serviceName} />
              <Para14 title={truncateText(service.serviceText, 60)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderServiceTab;
