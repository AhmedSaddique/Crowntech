import Image from 'next/image';
import React from 'react';



const FaqImg = ({ image }) => {


  return (
    <>
    <Image width={1000} height={1000} className='h-96 w-96 rounded-lg'
    src={`/${image.replace("public/", "")}`} 

     alt='faq'/>
    </>
  );
};

export default FaqImg;
