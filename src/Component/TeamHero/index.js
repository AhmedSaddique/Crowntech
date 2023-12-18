import React from 'react'
import { HeadingH1 } from '../Heading'
import Button from '../Button'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Para16 } from '../ParaGraph'
import Image from 'next/image'
import teamhero1 from '../../../public/assets/images/teamhero1.png'
import teamhero2 from '../../../public/assets/images/teamhero2.jpg'
import teamhero3 from '../../../public/assets/images/teamhero3.png'
import aboutm1 from '../../../public/assets/images/aboutm1.jpg'
import teamhero5 from '../../../public/assets/images/teamhero5.jpg'
import teamhero6 from '../../../public/assets/images/teamhero6.png'

import arrowDown from '../../../public/assets/images/arrowDown.png'


const TeamHero = () => {

  return (
    <>
   
    <div className={` bg-teamCircle bg-no-repeat`}>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center p-2 gap-10'>
        <div className=' space-y-4 p-2 sm:p-3 md:p-6 lg:p-14'>
          <HeadingH1 title={"Customers Love Our Creative Team, and So Will You"} />
          <div className='flex flex-wrap gap-4'>
            <Button text='Get Started' className='border-none px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md'/>
            <Button text='Learn More' endicon={<BiRightArrowAlt className='mt-1' size={20}/>} className=' hover:border-gray-600  border-none' />
          </div>
          <Para16 title={"“Highly recommend Iori Agency! They guide us on marketing initiatives and develop great strategies to increase our return on investment. The agency is excellent at being cooperative and responding quickly.”"}/>
        </div>
        <div>
        <div className='grid grid-cols-3 gap-5 '>
        <div className='space-y-5 relative'>
          <Image className='rounded-md' src={teamhero1} alt='teamhero1'/>
          <Image className='absolute hidden md:block rounded-md animate-bounce  pt-8   right-5' src={arrowDown} alt='arrowDown'/>
        </div>
        <div className='space-y-5 '>
          <Image className='rounded-md ' src={teamhero2} alt='teamhero2'/>
          <div className='border-4 border-primary-gray300 h-auto  flex items-center justify-end'>
          <Image className='relative rounded-md bottom-3 left-3' src={teamhero3} alt='teamhero3'/>
          </div>
          <div className='-rotate-90'>
          <Image className='absolute hidden md:block animate-bounceRight rounded-md -bottom-8 right-28' src={arrowDown} alt='arrowDown'/>
          </div>
        </div>
        <div className='space-y-5'>
        <div className='border-4 border-primary-gray300 h-auto  flex items-center justify-end'>
          <Image src={aboutm1} alt='teamhero4' className='relative rounded-md top-3 right-2' />
        </div>
          <Image className='rounded-md' src={teamhero5} alt='aboutm1'/>
          <Image className='rounded-md' src={teamhero6} alt='teamhero6'/>
        </div>
        </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default TeamHero