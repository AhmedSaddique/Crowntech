"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext({ id: '', setid: () => {} });

export const UseidContext = () => useContext(AppContext);

const ServiceContext = ({ children }) => {
  const [id, setid] = useState('');

  // Function to update id
  const Updateid = (newid) => {
    setid(newid);
    if (typeof window !== 'undefined') {
      localStorage.setItem('id', JSON.stringify(newid));
    }
  };

  // Load id from local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedid = localStorage.getItem('id');
        if (storedid !== null) {
          setid(JSON.parse(storedid));
        }
      } catch (error) {
        console.error('Error parsing id from localStorage:', error);
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ id, setid: Updateid }}>
      {children}
    </AppContext.Provider>
  );
};

export default ServiceContext;
