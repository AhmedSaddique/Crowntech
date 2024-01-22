import React from 'react';
import { HeadingH2, HeadingH4, HeadingH6 } from '../Heading';
import Image from 'next/image';
import { Para12, Para14, Para16, Para18 } from '../ParaGraph';
import Iconitem from '../Icon';
import { AboutTeam } from '../Constants';
import Container from '../Container';

const Team = () => {

  return (
    <Container className={`pt-20 pb-20`}>
 <div className='relative pb-10 '>
 <HeadingH6 title={"Our leadership team"} />
      <HeadingH2 title={"Meet the amazing team"} />

  </div> 
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

  {AboutTeam.map((array, index) => (
  <div className="max-w-sm rounded overflow-hidden  shadow-lg relative" key={index}>
    <div className="relative group h-auto ">
      <Image
        className="w-full h-[380px]"
        src={array.image}
        alt={array.image}
      />
      <div className="absolute top-0 left-0 w-full h-[full]  flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-2xl">
        <div className="px-6 py-4  text-center flex flex-col justify-between  h-[380px] duration-300 bg-opacity-20 ">
        <div className='text-white'>
          <HeadingH4 className="" title={array.name} />
          <HeadingH6 className="text-primary-blue100" title={array.title}/>
          <Para12 className="text-center pt-3" title={array.para}/>
        </div>
         
          <div className="flex flex-col justify-end items-center">
            <Iconitem className={' '}/>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    ))}


</div>

    </Container>
  );
};

export default Team;
