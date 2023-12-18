import React from 'react'
import Container from '../Container'
import { HeadingH1 } from '../Heading'
import { Para16 } from '../ParaGraph'
import Image from 'next/image'
import heropolicy from '../../../public/assets/images/heropolicy.jpg'

const PrivacyHero = () => {
  return (
    <>
    <div className='bg-primary-blue100 h-[50vh] md:h-[70vh]  bg-policyright bg-no-repeat bg-right-top pt-10 md:pt-20'>
    <Container className={'flex flex-col justify-center items-center space-y-5 text-primary-white'}>
       <HeadingH1 title={'Terms and Condition'}/> 
       <Para16 title={'Under no circumstances shall AliThemes be liable for any direct, '}/>
        <Image src={heropolicy} className=' hidden md:block md:h-[200px] lg:h-[300px] xl:h-[350px] xxl:h-[450px] rounded-md object-center bg-center object-cover' alt='heropolicy'/>
    </Container>  
    </div>
    </>
  )
}

export default PrivacyHero