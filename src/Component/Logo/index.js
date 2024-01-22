import Link from 'next/link';
import React from 'react';
import { HeadingH1, HeadingH2, HeadingH3, HeadingH4 } from '../Heading';

const Logo = ({ className }) => {
  return (
    <Link  href="/">
      <HeadingH3 className={`text-white dark:text-black`} title={'LOGO'}/>
      {/* <Image className='w-[100px] sm:w-[150px]' src={logo} /> */}
    </Link>
  );
};

export default Logo;