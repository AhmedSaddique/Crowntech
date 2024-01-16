"use client"
import React, { useEffect, useState } from 'react'
import Preloader from '../Preloader'

const LayoutProvider = ({ children , }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
    return (
      <>
       {loading ? (
      <Preloader />
    ) : (
        <div className={` w-full bg-primary-blue500 text-white dark:bg-primary-white dark:text-black`}>
        {children}
        </div>
    )}
      </>    
    )
}

export default LayoutProvider