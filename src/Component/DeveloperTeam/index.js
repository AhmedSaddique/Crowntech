'use client'
import React from 'react'
import { HeadingH2, HeadingH4, HeadingH6 } from '../Heading'
import Iconitem from '../Icon'
import { AboutTeam, DevTeam } from '../Constants'
import { useTheme } from 'next-themes'
import Container from '../Container'
import Image from 'next/image'

const DeveloperTeam = () => {
  const { theme, settheme } = useTheme();

  return (
    <>
      <Container>
 <div className='relative pb-10 '>
 <HeadingH6 title={"Our Developer Team"} />
      <HeadingH2 title={"Meet The Amazing Team"} />

  </div> 
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {DevTeam.map((array, index) => (
    <div className="relative mt-20" key={index}>
      <div className={`group rounded overflow-hidden shadow-md h-full max-h-full ${
        theme === 'dark' ? ' bg-primary-blue100' : ' bg-primary-white '
      }`}>
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className={`h-36 w-36 border-4  rounded-full ${theme === 'dark' ? 'border-primary-blue200 ' : 'border-white'}`}>
            <Image src={array.image} alt={array.image} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-2 mt-16 text-center">
          <HeadingH4 className="" title={array.name} />
          <HeadingH6 className="" title={array.title}/>
          <div className="flex justify-center pt-3 pb-5 translate-y-10 opacity-0 duration-500 transition group-hover:opacity-100 group-hover:translate-y-0 ">
            <Iconitem />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </Container>
    </>
    
  )
}

export default DeveloperTeam