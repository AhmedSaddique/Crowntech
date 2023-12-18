"use client";
import React from "react";
import { HeadingH1, HeadingH5 } from "../Heading";
import { Para16 } from "../ParaGraph";
import { useTheme } from "next-themes";
import { BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../Button";
import { supportdata } from "../Constants";


const Topics = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div
        className={` p-2`}
      >
        <HeadingH1 title={"Explore Topics"} />
        <Para16
          title={
            "Easily create Documentation, Knowledge-base, FAQ, Forum and more"
          }
        />
      </div>
      <div
        className={`  pt-5 pb-5 mt-10 shadow backdrop-blur-3xl ${
          theme === "dark" ? "" : " bg-primary-blue100 "
        }`}
      >
        <div className="lg:container mx-auto p-4">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
              {
                supportdata.map((array, index)=>(
                    <SwiperSlide key={index}>
              <div className="border rounded-md shadow flex gap-2 p-3 h-auto" >
                <div className={`w-2/12 ${
          theme === "dark" ? "text-primary-blue100" : "text-primary-white   "
        }`}>
                {array.icon}
                </div>
                <div className={`space-y-3 pt-5 w-10/12 `}>
                  <HeadingH5 className={`${
          theme === "dark" ? "text-primary-blue100" : "text-primary-white   "
        }`} title={array.title} />
                  <Para16
                    title={array.text} />
                  <Button className={`border-none ${
          theme === "dark" ? "text-primary-blue100" : "text-primary-white   "
        }`} text={'Get Started'} endicon={<BsArrowRightShort size={25}/>}/>
                </div>
              </div>
            </SwiperSlide>
                ))
                }
            
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Topics;
