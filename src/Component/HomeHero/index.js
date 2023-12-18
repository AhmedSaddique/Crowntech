
import React from 'react';
import Button from '../Button';
import Container from '../Container';
import { HeadingH1 } from '../Heading';
import { Para16 } from '../ParaGraph';

const Hero = () => {
  
 
  return (
    <>
   <div>
   <Container>
          <div className={`p-2 lg:p-28  `}>
             <div className=' space-y-4 p-25 text-center  '>
             <HeadingH1   title={"Crown International Technology"}/>
              <Para16 className={''} title={'“Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress.”'}/>
               <div className='flex flex-wrap justify-center gap-4 '>
                 <Button text='Get Started' className='border-none px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md' />
                 <Button text='Learn More' className='bg-primary-white px-4 py-2 shadow border-none text-black' />
               </div>
             </div>
           </div>
         </Container>
         </div>  
    </>
  );
};

export default Hero;
