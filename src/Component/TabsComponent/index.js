import React from 'react'
import { HeadingH6 } from '../Heading'
import Image from 'next/image'

import Link from 'next/link'
import { tabdata } from '../Constants'
import { Para14 } from '../ParaGraph'

const TabsComponent = () => {
    return (
        <div className='overflow-y-scroll no-scrollbar xl:max-h-[400px] xxl:max-h-[550px]'>
        <HeadingH6 className={'text-white'} title={"Top Apps"} />
        <div className='grid grid-cols-2 sm:grid-cols-4 mt-5 mb-5 gap-4 p-2'>
        {
            tabdata.map((array, index)=>(
                <Link href='/product' key={index} className=' bg-primary-white hover:bg-primary-light hover:scale-105 transition duration-300 text-center pt-5 pb-5  rounded-md '>
                <Image className='w-[50px] mx-auto' src={array.image} alt={array.image} />
                <HeadingH6 className={'text-primary-black'} title={array.title}/>
               </Link>
            ))
        }
        </div>

        <HeadingH6 className={'text-white'} title={"Recommended"}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 p-2'>
        {
            tabdata.map((array,index)=>(
                <Link href="/product" key={index} className='bg-primary-white hover:bg-primary-light hover:scale-105 flex items-center transition duration-300 gap-2 p-3 shadow-lg text-primary-white rounded-md'>
                <Image className='w-[50px]' src={array.image} alt={array.image}/>
                <div className='text-primary-black'>
                    <HeadingH6 title={array.title}/>
                    <Para14 title={array.text}/>
                </div>
                </Link>
            ))
        }
       
        </div>
        </div>
    )
}

export default TabsComponent