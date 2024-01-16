
import React from 'react'
import Logo from '../Logo'
import { FooterAbout, FooterResources, WeOffer } from '../Constants'
import FooterDiv from '../FooterDiv'
import Container from '../Container'
import Iconitem from '../Icon'


const Footer = () => {
  return (
    <>
      <footer className={`pt-10  bg-primary-blue500  dark:bg-primary-light`}>
        <div className='w-full border-t shadow-lg  pt-10  relative bottom-0 space-x-5'>
          <Container>
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5  gap-3 space-y-5'>
              <FooterDiv>
                <Logo />
                <p className='font-semibold'>4517 Washington Ave.
                  Manchester, Kentucky 39495</p>
                <p className='font-semibold '><span>Hours:</span> 8:00-17:00, Mon-Sat </p>
               
              </FooterDiv>
              <FooterDiv title={"About us"} array={FooterAbout} />
              <FooterDiv title={"Resources"} array={FooterResources} />
              <FooterDiv title={"We offer"} array={WeOffer} />
              <FooterDiv title={"Follow us"} >
                  <p className='font-semibold text-xs'>Secured Payment Gateways</p>
                  <Iconitem />
              </FooterDiv>
            </div>
            
          </Container>
          <div className='text-center pt-14 pb-2'>
          © 2023 Crown International Technology. All Right Reserved.
          </div>
        </div>
        
      </footer>

    </>

  )
}

export default Footer