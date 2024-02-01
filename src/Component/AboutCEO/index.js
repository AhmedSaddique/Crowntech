import React from "react";
import Container from "../Container";
import { HeadingH1, HeadingH4, HeadingH5 } from "../Heading";
import ceo from "../../../public/assets/images/ceo.jpeg";
import Image from "next/image";
import { Para14, Para18 } from "../ParaGraph";

const Aboutceo = () => {
  return (

      <Container  className={'pt-10 pb-20'}>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center mt-4 mb-4">
          <div className="space-y-2">
          <HeadingH1 className={'whitespace-pre-wrap'} title={"Meet the\nFounders"} />
          <div className="border-b-8 border-b-primary-blue100 w-40 pt-5" />
          <Para18 className={'whitespace-pre-wrap pt-10'} title={'Introducing the visionary minds driving our software\ndevelopmentcompany, shaping the future of technology\nwith expertise and innovation.'}/>
          </div>
            <div className="dark:bg-white bg-primary-blue100 m-auto rounded-full md:mt-0 mt-10 h-64 w-64 sm:h-96 sm:w-96 shadow-2xl text-center space-y-3">
                <Image className="block rounded-full p-2 h-64 w-64 sm:h-96 sm:w-96 shadow object-cover" width={400} height={400} src={ceo} alt={"Chairman"}></Image>
                <HeadingH4 title={'Mubashir Nazir'}/>
                <HeadingH5 title={'CEO & FOUNDER'}/>
            </div>
        </div>
      </Container>
  
  );
};

export default Aboutceo;
