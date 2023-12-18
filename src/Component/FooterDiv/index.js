import Link from 'next/link'
import React from 'react'

const FooterDiv = ({ title, array, children }) => {
    return (
        <div className='space-y-3'>
            <h1 className='text-[20px] font-semibold'>{title} </h1>
            <div className='space-y-3'>
                {array && <ul className='flex space-y-3 flex-col items-start list-none'>
                    {array && array.map((item, index) => (
                        <li key={index} className="">
                            <Link href={item.href} >
                                {item.title}</Link>
                        </li>
                    ))}
                </ul>}
                
                {children}

            </div>

        </div>

    )
};

export default FooterDiv