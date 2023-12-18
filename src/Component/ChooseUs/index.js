import React from 'react'
import { HeadingH2, HeadingH3 } from '../Heading'
import Image from 'next/image'
import Badges from '../Badges'
import { Para14, Para16 } from '../ParaGraph'
import { TiTick } from 'react-icons/ti'
import Button from '../Button'
import Container from '../Container'

const ChooseUs = ({className, flex = "md:flex",maintitle,image1,mainimage,image2,badge,choosetitle,choosepara,Choosedata }) => {


  return (
    <>
    <Container>
    <div className='pt-10 space-y-10'>
        <HeadingH2 className={"text-center "} title={maintitle} />
        <div className={`flex flex-wrap md:flex-nowrap gap-4 ${className} ${flex}`}>

          <div className='relative w-full md:w-6/12 '>
            <Image className='absolute top-0 right-0 hidden md:flex  animate-bounce' src={image1} alt='image1' />
            <Image className='rounded-full' src={mainimage} alt='mainimage' />
            <Image className='absolute bottom-0 md:bottom-10 lg:bottom-0 hidden md:flex  animate-bounce ' src={image2} alt='image2' />
          </div>
          <div className={`space-y-3 w-full md:w-6/12 `}>
            <Badges  className={` shadow-md text-center  border-none `} title={badge} />
            <HeadingH3  title={choosetitle} />
            <Para16 title={choosepara} />

            <div className='grid grid-cols-1 sm:grid-cols-2 '>
              {
                Choosedata && Choosedata.map((array, index) => (
                  <div className='flex gap-3 mt-2 mb-2  ' key={index}>
                    <TiTick size={22} />
                    <Para14 title={array.title} />
                  </div>
                ))
              }
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                text="Contact Us"
                className='border-none px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md'
              />
              <Button text="Support Center" className="bg-primary-white text-black" />
            </div>

          </div>

        </div>

      </div>
    </Container>
      


    </>
  )
}

export default ChooseUs