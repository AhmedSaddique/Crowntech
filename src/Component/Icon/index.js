import Link from 'next/link';
import React from 'react'
import { AiOutlineInstagram ,AiFillLinkedin} from "react-icons/ai";
import { BiLogoFacebook } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';

const Iconitem = ({className}) => {
  return (
    <div className={`flex gap-2 text-3xl mt-2 ${className}`}>
    <div className='bg-primary-white shadow-lg rounded-full p-1'>
        <Link href="#" >
            <BiLogoFacebook  className=' text-primary-blue100  hover:text-primary-blue200 rounded-full'/>
        </Link>
    </div>
    <div className='bg-primary-white shadow-lg rounded-full p-1'>
        <Link href="#">
            <AiOutlineInstagram className=' text-primary-blue100 hover:text-primary-blue200 rounded-full'/>
        </Link>
    </div>
    <div className='bg-primary-white shadow-lg rounded-full p-1'>
        <Link href="#">
            <FaXTwitter className=' text-primary-blue100 hover:text-primary-blue200 rounded-full'/>
        </Link>
    </div>
    <div className='bg-primary-white shadow-lg rounded-full p-1'>
        <Link href="#">
            <AiFillLinkedin className=' text-primary-blue100 hover:text-primary-blue200 rounded-full'/>
        </Link>
    </div>

    </div>
  )
}

export default Iconitem;