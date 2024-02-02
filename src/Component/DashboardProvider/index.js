import React, { useState } from 'react';
import PrelineScript from '../PrelineScript';
import Link from 'next/link';
import { GrHomeRounded } from "react-icons/gr";
import { IoServerOutline } from "react-icons/io5";
import Switcher from '../Switcher';
import icon from '../../../public/assets/images/dashicon.avif'
import Image from 'next/image';
const DashboardProvider = ({ children}) => {
  const [activeLink, setActiveLink] = useState('/dashboard');
  const handleLinkClick = (Link) => {
    setActiveLink(Link);
  };
  return (
   <>
  <header className="sticky top-0 flex shadow flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-primary-blue500 border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-white ">
    <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
      <div className="me-5 lg:me-0 lg:hidden">
        <Link className="flex-none text-xl font-semibold text-white dark:text-black " href={'./dashboard'} aria-label="Brand">Brand</Link>
      </div>
      <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
        <div className="sm:hidden">
          <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent  hover:bg-primary-blue100 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={11} cy={11} r={8} /><path d="m21 21-4.3-4.3" /></svg>
          </button>
        </div>
        <div className="hidden sm:block shadow rounded-md">
          <label htmlFor="icon" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg className="flex-shrink-0 mt-2 h-4 w-4 " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx={11} cy={11} r={8} /><path d="m21 21-4.3-4.3" /></svg>
            </div>
            <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-full  border-primary-blue100 rounded-lg text-sm focus:border-primary-blue200 focus:ring-primary-blue300 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-white  dark:focus:ring-white/60" placeholder="Search" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-2">
          <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent  text-white hover:text-black  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-black dark:hover:text-white  dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
          </button>
          <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent  text-white hover:text-black  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-black dark:hover:text-white  dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-offcanvas="#hs-offcanvas-right">
            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
          </button>
          <Switcher />
          <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
            <button id="hs-dropdown-with-header" type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none  dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <Image className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={icon} alt="Image Description" />
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-primary-blue100 shadow-md rounded-lg p-2 dark:bg-white dark:border dark:border-white/70" aria-labelledby="hs-dropdown-with-header">
              <div className="py-3 px-5 -m-2 bg-primary-blue200 rounded-t-lg ">
                <p className="text-sm text-white">Signed in as</p>
                <p className="text-sm font-medium text-white">james@site.com</p>
              </div>
              <div className="mt-2 py-2 first:pt-0 last:pb-0">
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white dark:text-black hover:bg-primary-blue200 focus:ring-2 focus:ring-primary-blue200/50 dark:hover:text-white  " href="#">
                  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                  Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>


  <div className="sticky top-0  z-20 bg-primary-blue500 border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-white dark:border-white/80">
    <div className="flex items-center py-4">
      {/* Navigation Toggle */}
      <button type="button" className="" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="flex-shrink-0 w-4 h-4 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={3} x2={21} y1={6} y2={6} /><line x1={3} x2={21} y1={12} y2={12} /><line x1={3} x2={21} y1={18} y2={18} /></svg>
      </button>
      {/* End Navigation Toggle */}
      {/* Breadcrumb */}
      <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
        <li className="flex items-center text-sm text-white dark:text-black">
          Dashboard
          <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </li>
        <li className="text-sm font-semibold text-white truncate dark:text-black" aria-current="page">
          Service
        </li>
      </ol>
      {/* End Breadcrumb */}
    </div>
  </div>
  {/* End Sidebar Toggle */}

  {/* Sidebar */}
  <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-primary-blue500 border-e border-primary-blue500 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-white  dark:border-white dark:shadow">
    <div className="px-6">
      <Link className="flex-none text-xl font-semibold text-white dark:text-black  dark:focus:outline-none dark:focus:ring-1" href="./" aria-label="Brand">Brand</Link>
    </div>
    <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" >
      <ul className="space-y-1.5">
        
          <Link className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-primary-blue100 dark:hover:bg-primary-blue100 dark:text-black dark:hover:text-white dark:focus:outline-none dark:focus:ring-1
         dark:focus:ring-primary-blue100 ${activeLink === '/dashboard' ? 'bg-primary-blue100 text-white dark:text-white' : ''}`} href="/dashboard"  >
            <GrHomeRounded className="flex-shrink-0 w-4 h-4"/>
            Dashboard
          </Link>
        <Link className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-primary-blue100 dark:hover:bg-primary-blue100 dark:text-black dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary-blue100 ${
                activeLink === '/dashboard/service' ? 'bg-primary-blue100 text-white dark:text-white' : ''
              }`}href="/dashboard/service">
        <IoServerOutline  className="flex-shrink-0 w-4 h-4" />
            Service
          </Link>

      </ul>
    </nav>
  </div>


  <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 ">
    <header className='border shadow-md rounded-md '>
     {children}
   <PrelineScript />

    </header>
  </div>
   
   </>
  );
};

export default DashboardProvider;
