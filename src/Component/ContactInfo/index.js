import React from "react";
import { HeadingH6 } from "../Heading";
import { Para14, Para16 } from "../ParaGraph";
import { ConactInfoData } from "../Constants";
import Container from "../Container";

const ContactInfo = () => {
  return (
    <Container className={"pt-20 pb-20"}>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ConactInfoData.map((array, index) => (
          <div className=" flex flex-col items-center text-start" key={index}>
            <div className="flex gap-4 h-full w-full p-3 border rounded-md shadow-md hover:border-primary-blue100 transition duration-300">
              {array.icon}
              <div className="space-y-1">
                <HeadingH6 title={array.title} />
                <span className="gap-2 flex">
                  {array.email}
                  <Para16 className={"font-bold"} title={array.emailinfo} />
                </span>
                <Para14 title={array.para} />
                <Para14 title={array.para1} />
                <Para14 title={array.para2} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ContactInfo;
