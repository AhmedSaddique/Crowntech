"use client"
import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes';

const LayoutProvider = ({ children , }) => {
    const {theme , usetheme} = useTheme();
    return (
      <>
        <ThemeProvider>
        <div className={` w-full ${
        theme=== 'dark' ? ' bg-primary-blue500 text-white' : ' bg-primary-white text-black '
      }`}>
        {children}
        </div>
        </ThemeProvider>
      </>    
    )
}

export default LayoutProvider