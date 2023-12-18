"use client"
import React, { useContext } from 'react'
import choosemain from '../../../public/assets/images/choosemain.png'
import choose1 from '../../../public/assets/images/choose1.png'
import choose3 from '../../../public/assets/images/choose3.png'
import choosemain2 from '../../../public/assets/images/choosemain2.png'
import choose2 from '../../../public/assets/images/choose2.png'
import choose4 from '../../../public/assets/images/choose4.png'
import LayoutProvider from '@/Component/LayoutProvider'
import AboutHero from '@/Component/AboutHero'
import Testimonial from '@/Component/Testimonial'
import ChooseUs from '@/Component/ChooseUs'
import Blog from '@/Component/Blog'
import { NavbarContext } from '@/Component/ContextProvider'
import Footer from '@/Component/Footer'

const About = () => {
  const {Header} = useContext(NavbarContext)
  return (
    <LayoutProvider>
      <Header/>
      <AboutHero/>
      <ChooseUs
          maintitle={"CROWN Vision & Mission"}
          image1={choose1}
          mainimage={choosemain}
          image2={choose3}
          badge={"Mission"}
          choosetitle={"Our Mission"}
          choosepara={'Crown International Technology’s aim is to empower people, businesses, and organisations throughout the world by utilising cutting-edge digital technology. We work hard to provide cutting-edge solutions that boost productivity, connection, and efficiency while promoting sustainable growth. We strive to change the digital environment, inspire technical innovation, and enable our clients to succeed in the constantly changing digital era through our knowledge, creativity, and unrelenting pursuit of excellence.'}
          Choosedata={[
            { id: "1", title: "Send & Schedule Posts" },
            { id: "2", title: " Online Visitors" },
            { id: "3", title: " Create fully integrated campaigns" },
            { id: "4", title: " Push Notification" },
            { id: "5", title: " Live Chat Request" },
            { id: "6", title: " Directly send or schedule posts" },
          ]}

        />

        <ChooseUs
          flex={'flex-row-reverse'}
          image1={choose2}
          mainimage={choosemain2}
          image2={choose4}
          badge={"Vision"}
          choosetitle={"Our Vision"}
          choosepara={'Our company’s aim is to be the acknowledged global leader in digital solutions, revolutionizing sectors and enabling businesses to prosper in the digital era. We see a day when cutting-edge technology and creative strategies revolutionize how organizations run, improve human experiences, and have a beneficial influence on society. We intend to influence the digital environment, open up new opportunities, and serve as the global catalyst for sustainable growth and digital transformation with a dedication to quality, integrity, and forward-thinking. Let’s work together to create a connected world where technology has no bounds and opportunities are endless.'}
          Choosedata={[
            { id: "1", title: "Send & Schedule Posts" },
            { id: "2", title: " Online Visitors" },
            { id: "3", title: " Create fully integrated campaigns" },
            { id: "4", title: " Push Notification" },
            { id: "5", title: " Live Chat Request" },
            { id: "6", title: " Directly send or schedule posts" },
          ]}

        />
        <Testimonial/>
        <Blog/>
        <Footer/>
    </LayoutProvider>
  )
}

export default About