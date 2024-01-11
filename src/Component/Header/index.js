"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import {HiOutlineBars3BottomRight} from 'react-icons/hi2';
import { Modal } from 'antd';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Drawer, Tabs } from 'antd';
import { ImCross } from 'react-icons/im';
import { BiLogoGmail } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import TabsComponent from '../TabsComponent';
import Container from '../Container';
import Logo from '../Logo';
import Navlink from '../NavLink';
import ThemeToggle from '../ThemeToggle';
import Button from '../Button';
import { motion } from 'framer-motion';
import HeaderServiceTab from '../HeaderServiceTab';


const Header = ({ className }) => {

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  

  const onChangeTab = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'All',
      children: <TabsComponent />,
    },
    {
      key: '2',
      label: 'Apps',
      children: <TabsComponent />,
    },
    {
      key: '3',
      label: 'Service',
      children: <HeaderServiceTab />,
    },
  ];
  const handleCloseDrawer = () => {
    onClose();
  };
  const handleScroll = () => {
    if (window.scrollY < 200) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const token = useTheme();
  const toggleModal = (idx, target) => {
    setIsModalOpen((p) => {
      p[idx] = target;
      return [...p];
    });
  };
 
  return (
    <>
  
  <nav
        className={`${
          theme === 'dark'
            ? ' bg-primary-blue500 '
            : ' bg-primary-light '
        } sticky top-0  z-20 shadow-xl drop-shadow ${scrollingUp ? 'show' : 'hide'}`}
      >
      <Container className="flex flex-col xs:flex-row xs:justify-between xs:flex-wrap">
    <motion.div  initial={{ opacity: 0,  x:20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className='flex flex-wrap sm:flex gap-3 p-2'>
    <p className='text-14 flex gap-2'>
      <BiLogoGmail size={20}/>
      info@crownintltechnology.com
    </p>
    <p className='text-14 flex ap-2'>
      <BsTelephoneFill size={20}/>
      +92 328 0143786
    </p>
  </motion.div>
  <motion.div initial={{ opacity: 0,  x:-20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className='hidden  md:flex flex-row  xs:items-center gap-4 p-2'>
    <Link className='font-normal' href="/login">
      Free Trial
    </Link>
    <Link className='font-normal' href="/login">
      Login
    </Link>
    
  </motion.div>
</Container>

  <div className={`${theme === 'dark' ? 'bg-primary-white ' : 'border-b-primary-black'
        }  border-b-2 w-[95%] mx-auto`} />
      <Container className="flex justify-between py-4 pt-2 pb-2 ">
        <div className="relative z-10">
          <Logo />
        </div>
        <motion.div initial={{ opacity: 0,  y:40 }}
        animate={{ opacity: 1, y: 0 , staggerChildren:0.2,}}
        transition={{ duration: 0.5 }} className="lg:flex  lg:gap-10 items-center hidden ">
          <Navlink onClose={() => setMobileMenuOpen(false)} />
        </motion.div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button onClick={() => toggleModal(0, true)} className={'border-none'} text={<AiOutlineSearch size={25}/>} />
            <Modal
            centered
              open={isModalOpen[0]}
              onOk={() => toggleModal(0, false)}
              onCancel={() => toggleModal(0, false)}
              maskStyle={{ backdropFilter: 'blur(10px)' }} 
              className='searchmodal'
              footer=""
             
            >
               <form  className="relative border-none mt-6 ">
             
                <div className="absolute inset-y-0 flex items-center  pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-main"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 bg-primary-white text-black text-sm border-2 focus:outline-none rounded"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-light absolute right-2.5 bottom-2.5 bg-primary-blue100 text-white hover:bg-primary-gray400 transition duration-300 font-medium rounded text-sm px-4 py-2"
                >
                  Search
                </button>
              
            </form>
            </Modal>
            <Button className={'border-none'} onClick={showDrawer} btnicon={<HiOutlineBars3BottomRight size={25} />} text='' />
            <Drawer
              width={700}
              placement={placement}
              closable={false}
              open={open}
              onClose={onClose}
              key={placement}
              className='drawerbox'
              style={{ background: "transparent", overflow: "hidden !important",}}
              >
              <div className={`rounded-lg shadow-xl  p-3 ${theme === 'dark' ? '  backdrop-blur-2xl' : ' backdrop-blur-2xl '
        }`}>
              <div className={`flex  justify-center border-2 hover:scale-105  shadow-md text-primary-white hover:shadow-lg duration-100 transition rounded-md p-2 w-10`} onClick={handleCloseDrawer}>
                  <ImCross />
                </div>
                <div>

                <Tabs className='drawerTab mt-5' defaultActiveKey="1" items={items} onChange={onChangeTab} />

                </div>
              </div>
            </Drawer>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center bg-primary-blue200 text-primary-white  rounded-lg p-2 hover:bg-primary-blue200 transition duration-300"
              >
              {mobileMenuOpen ? (
                <IoIosArrowUp className="text-2xl mt-[5px]" />
                ) : (
                  <TbMenu2 className="text-2xl mt-[5px]" />
                  )}
            </button>
            {mobileMenuOpen && (
              <div className={`absolute -z-10 inset-x-0  h-screen   origin-top rounded-b-2xl px-6 pb-6 pt-10 ${theme === 'dark' ? 'bg-primary-blue500' : 'bg-primary-white'
            }`}>
                <div className="space-y-4  flex-col flex z-50">
                  <Navlink onClose={() => setMobileMenuOpen(false)} />

                </div>
                <div className='flex flex-row  xs:items-center gap-4 pt-3'>
                <Link className='font-medium' href="/login">
                  Free Trial
                </Link>
                <Link className='font-medium' href="/login">
                  Login
                </Link>
              </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
     
    
    </>
  );
};

export default Header;
