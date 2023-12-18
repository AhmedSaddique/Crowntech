"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

const ThemeProvide = ({ children }) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
           
    )
}

export default ThemeProvide