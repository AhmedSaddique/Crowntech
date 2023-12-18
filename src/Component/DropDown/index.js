import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HeadingH5 } from '../Heading';


const DropDown = ({ array, text, icon, onLinkClick,BtnClass, textSize = 'font-semibold mt-0', alignment = 'left-0' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const { theme } = useTheme();


  return (
    <div className={`inline-block  ${textSize}`} >
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${BtnClass}`}
      >
        {text}
        {icon}
      </button>
      {isOpen && (
        <div 
          className={`fixed ${alignment} z-20 rounded-md shadow  ${theme === 'dark' ? 'bg-primary-blue400' : ' bg-primary-white'
            }`} >
          {
            array.map((array, index) => (
          <div key={index}  onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          ref={dropdownRef}>
                <HeadingH5 className="mb-3" title={array.Category} />
                {array.items.map((items, index) => (
                  <div onClick={onLinkClick} key={index}>
                    <Link className='' href={items.href} onClick={() => setIsOpen(!isOpen)} key={index}>
                      <div className="flex gap-3 md:gap-5 justify-between items-center rounded-md hover:bg-primary-blue100 hover:text-white px-2 py-2">
                        {items.title}
                        <div className='bg-blue-600 text-[10px] text-white py-1 px-2 rounded-full'>
                         {items.subtitle}
                        </div>
                      </div>
                    </Link>
                    
                  </div>
                ))}
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default DropDown;
