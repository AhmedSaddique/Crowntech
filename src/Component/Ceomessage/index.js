import React from "react";
import Container from "../Container";
import { HeadingH1, HeadingH3, HeadingH4, HeadingH5 } from "../Heading";
import Image from "next/image";
import ceo2 from "../../../public/assets/images/ceo2.png";
import { Para16, Para18 } from "../ParaGraph";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const CeoMessage = () => {
  return (
    <Container className={"max-w-screen-xl pt-20 pb-20"}>
      <div className="pb-20 pt-20 text-center">
        <HeadingH1
          className={"whitespace-pre-wrap"}
          title={"Our Mission"}
        />
        <Para18
          className={"whitespace-pre-wrap pt-10"}
        
          title={
            "At PF, we consult and lead compliance-based solutions and implement industry best practices for clients across the globe. What started off as a team of two, has now significantly grown and consists of more than 800 dedicated employees, working at 12 locations within Pakistan and 5 locations internationally."
          }
        
        />
      </div>
      <div className=" rounded-md  pt-5 mt-20 bg-primary-blue100 dark:bg-white shadow-xl">
        <div className=" lg:p-8 md:p-6 sm:p-4 p-2 space-y-3 ">
          <HeadingH3 className={'border-b-2'} title={'CEO Message'}/>
          <Para18
            className={"pt-3 pb-3 "}
            icon={<FaQuoteLeft size={25} />}
            title={
              "At PF, we consult and lead compliance-based solutions and implement industry best practices for clients across the globe. What started off as a team of two, has now significantly grown and consists of more than 800 dedicated employees, working at 12 locations within Pakistan and 5 locations internationally."
            }
            endicon={<FaQuoteRight size={25} />}
          />
          <HeadingH4
            className={"dark:text-primary-blue100"}
            title={"Mubashir Nazir"}
          />
          <Para16 className={"font-medium"} title={"CEO & FOUNDER"} />
        </div>
      
      </div>
    </Container>
  );
};

export default CeoMessage;
