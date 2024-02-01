import React, { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { HeadingH4, HeadingH5, HeadingH6 } from "../Heading";
import MegaData from "../MegaData";
import axios from "axios";
import ServiceContext from "../ServiceContext";

const MegaMenu = ({
  array,
  className,
  text,
  icon,
  onLinkClick,
  textSize = "font-semibold mt-0",
  alignment = "left-0",
  servicecatProp,
  toggleMenu, isOpen, ...otherProps
}) => {
  const [servicecat, setservicecat] = useState(servicecatProp || []);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/servicecategory");
        setservicecat(response.data.servicecategories);
        // Optionally set the first category as active by default
        if (response.data.servicecategories.length > 0) {
          setActiveCategoryId(response.data.servicecategories[0].id);
        }
      } catch (error) {
        console.log(error, "Error getting service category");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/serviceinfo');
        setAllServices(response.data.serviceinfos);
      } catch (error) {
        console.error("Error getting service info:", error);
      }
    };

    fetchServices();
  }, []);

  // Filter services for active category
  const activeCategoryServices = allServices.filter(service => service.categoryId === activeCategoryId);


  const dropdownRef = useRef(null);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
 

  const handleTabClick = (categoryId) => {
    setActiveCategoryId(categoryId);
  };
 
  return (
    <div className={`inline-block  ${textSize}`}>
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${
          icon && icon
        }`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 lg:top-auto lg:mt-5 xl:mt-4 ${alignment}  z-20   shadow-lg bg-primary-blue500 dark:bg-primary-white`}
          ref={dropdownRef}
        >
          <div
            onClick={toggleMenu}
            className="border-2 hover:scale-105 m-2 hover:border-primary-blue100 duration-300 transition rounded-md flex p-2 items-center justify-center w-10"
          >
            <ImCross />
          </div>
          <div className="flex gap-1 " style={{width:"100%" , maxHeight:"calc(100vh - 65px)" }}>
            <div className={` ${className}  p-1 overflow-y-scroll lg:max-h-[330px] xl:max-h-[420px] xxl:xl:max-h-max pt-5 w-5/12 md:w-3/12  `}>
              {servicecat.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleTabClick(category.id)}
                  className={`${
                    activeCategoryId === category.id
                      ? "active bg-primary-blue300 text-primary-white"
                      : ""
                  } p-2 rounded-md mt-2 mb-2 hover:bg-primary-blue200 hover:text-primary-white transition duration-300`}
                >
                  <HeadingH6 initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }} title={category.catName} />
                </div>
              ))}
            </div>
            <div
              className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-7/12 md:w-9/12 md:p-3 p-1 pb-[30vh]`}
            >
              {activeCategoryId && (
                <ServiceContext>
                  <MegaData
                    categoryId={activeCategoryId}
                    services={activeCategoryServices}
                  />
                </ServiceContext>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
