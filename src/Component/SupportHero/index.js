
import React from 'react'
import { Para16, Para18 } from '../ParaGraph'
import { HeadingH1 } from '../Heading'
const SupportHero = () => {

  return (
    <div className={` pt-10  w-full `}>
      <div className='xl:p-18 lg:p-10 md:p-2 sm:p-2 p-3 space-y-4 text-center'>
          <Para18 className={'font-bold text-justify'} title={"________ Support Center"}/>
          <div className='-space-y-3'>
          <HeadingH1 title={"How can we help you?"}/>
          </div>
          <Para16 title={"“Crown International Technology: Redefining the Digital Frontier Unlocking Digital Potential, Empowering Global Progress.”"}/>
      </div>
    
      </div>
  )
}

export default SupportHero