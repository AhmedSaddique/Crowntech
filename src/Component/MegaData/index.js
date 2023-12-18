"use client"
import Link from 'next/link'
import React, { useEffect, useState} from 'react';
import { HeadingH4, HeadingH5, HeadingH6 } from '../Heading'
import { Para12, Para14 } from '../ParaGraph'
import { Aboutcore } from '../Constants';
import Image from 'next/image';
import axios from 'axios';

const MegaData = ({onLinkClick , serviceinfoProp}) => {
  const [serviceinfo, setserviceinfo] = useState(serviceinfoProp || []);
  const fetchdata = async () =>{
    try{
      const response = await axios.get('/api/serviceinfo' , serviceinfo)
      setserviceinfo(response.data.serviceinfo);
      console.log("API response:", response.data.serviceinfo);
    } catch(error){
      console.log(error, "Error getting service info")

    }
  }
  useEffect(() => {
    fetchdata();
  }, []);

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
      {
        serviceinfo.map((array , index  )=>(
          <div key={array.id || index} className=' '>
          <Link className='' href={`/service`} >
            <div className="flex flex-col sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0   duration-300 transition gap-3  rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2">
              <Image className='w-[30px] h-[30px] rounded-full' width={200} height={200}
              src={`/${array.serviceImage.replace("public/", "")}`} alt={`/${array.serviceImage.replace("public/", "")}`}/>
              <div>
              <HeadingH6 title={array.serviceName}/>
              <Para12 title={array.serviceText}/>
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