import React, { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useTheme } from "next-themes";
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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicecat, setservicecat] = useState(servicecatProp || []);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

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

  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleBothClicks = () => {
    setIsOpen(!isOpen);
    onLinkClick();
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const { theme } = useTheme();

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
          className={`absolute top-0 lg:top-auto lg:mt-5 xl:mt-7 ${alignment}  z-20   shadow-lg ${
            theme === "dark" ? "bg-primary-blue500" : "bg-primary-white"
          }`}
          ref={dropdownRef}
        >
          <div
            onClick={toggleMenu}
            className="border-2 hover:scale-105 m-2 hover:border-primary-blue100 duration-300 transition rounded-md flex p-2 items-center justify-center w-10"
          >
            <ImCross />
          </div>
          <div className="flex gap-1 " style={{width:"100%" , maxHeight:"calc(100vh - 65px)" }}>
            <div className={` ${className}  p-1 overflow-y-scroll lg:max-h-[300px] xl:max-h-[400px] xxl:xl:max-h-max pt-5 w-full md:w-3/12  `}>
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
                  <HeadingH6 title={category.catName} />
                </div>
              ))}
            </div>
            <div
              className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-9/12 pb-[30vh]`}
            >
              {activeCategoryId && (
                <ServiceContext>
                  <MegaData
                    categoryId={activeCategoryId}
                    onLinkClick={onLinkClick}
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
