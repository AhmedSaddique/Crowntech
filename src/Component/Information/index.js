
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import finger from '../../../public/assets/images/finger.png'
import Badges from '../Badges';
import { HeadingH3 } from '../Heading';
import Container from '../Container';
import { Para16 } from '../ParaGraph'
import Link from 'next/link'


const Information = ({image , badge, title ,para , button,endicon,starticon,link}) => {

 
  return (
    <>
 <div>
 <Container className={'backdrop-blur-3xl pb-20 '}>
    <div className='pt-10'>
    <div className='grid grid-cols-1 md:grid-cols-2 rounded-md shadow   space-y-10 ' >
    <div className='hidden md:flex'>
        <Image src={image} alt='infoImage' className='rounded-l-md'  />
    </div>
    <div className={` p-5 md:p-8 lg:p-10 space-y-4 relative `}>

        <Badges title={badge} className={`shadow-md text-center  border-none `}/>
        <HeadingH3 className="" title={title}/>
        <Para16 title={para} />
        <Link className='x' href={`${link}`}>
        <Button className='border-none mt-5  bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md  ' btnicon={starticon} text={button} endicon={endicon} />
        </Link>
        
       <div>
        <Image src={finger} alt='finger' className='absolute bottom-0 right-0'/>
        </div>
    </div>
    </div>
    </div>
    </Container>
 </div>
   
 
    </>
  )
}

export default Information