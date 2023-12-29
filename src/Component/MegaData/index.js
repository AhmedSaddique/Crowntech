"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HeadingH4, HeadingH6 } from '../Heading';
import { Para12 } from '../ParaGraph';
import Image from 'next/image';
import axios from 'axios';
import { Aboutcore } from '../Constants';

const MegaData = ({ categoryId }) => {
  const [serviceinfo, setserviceinfo] = useState([]);
  const [filteredServiceInfo, setFilteredServiceInfo] = useState([]);
  const [activeinfoId, setActiveinfoId] = useState(null);

  useEffect(() => {
    const fetchServiceInfo = async () => {
      try {
        const response = await axios.get(`/api/serviceinfo`);
        setserviceinfo(response.data.serviceinfos);
        // Setting the first Serviceinfo ID of the filtered list
        if (response.data.serviceinfos.length > 0) {
          const firstFilteredService = response.data.serviceinfos.find(service => service.categoryId === categoryId);
          if (firstFilteredService) {
            setActiveinfoId(firstFilteredService.id);
          }
        }
      } catch (error) {
        console.error('Error getting service info:', error);
      }
    };
    fetchServiceInfo();
  }, [categoryId]);

  useEffect(() => {
    // Filter the serviceinfo data based on categoryId
    const filteredData = serviceinfo.filter(service => service.categoryId === categoryId);
    setFilteredServiceInfo(filteredData);
    if (filteredData.length > 0) {
      setActiveinfoId(filteredData[0].id);
    }
  }, [serviceinfo, categoryId]);

  useEffect(() => {
    // Filter the serviceinfo data based on categoryId
    const filteredData = serviceinfo.filter(service => service.categoryId === categoryId);
    setFilteredServiceInfo(filteredData);
  }, [serviceinfo, categoryId]);

      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };
    
      const openDropdown = () => {
        setIsOpen(true);
      };
  
 
  return (
    <>
    {
    Aboutcore.Category.map((data) => (
      <>
      <div key={data.id} className='flex items-center p-3  '>
      <HeadingH4 className=" " title={data.cat ||"categ" } />
      </div>
      </>
      ))}
      
       {filteredServiceInfo.map((service, index) => (
        <div key={service.id || index} className=''>
          <Link href={`/service/${service.id}`}>
            <div className="flex flex-col sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0   duration-300 transition gap-3  rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2">
              <Image className='w-[30px] h-[30px] rounded-full' width={200} height={200}
              src={`/${service.serviceImage.replace("public/", "")}`} alt={`/${service.serviceImage.replace("public/", "")}`}/>
              <div>
              <HeadingH6 title={service.serviceName}/>
              <Para12 title={service.serviceText}/>
              </div>
            </div>
          </Link>
      </div>
        ))
      }
   
    </>
  )
}

export default MegaData