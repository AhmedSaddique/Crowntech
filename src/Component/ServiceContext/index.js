"use client";
// ServiceContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AppContext = createContext({ id: {}, setid: () => {} });

export const useidContext = () => useContext(AppContext);

const ServiceContext = ({ children }) => {
  const [id, setid] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedid = localStorage.getItem('id');
        return storedid ? JSON.parse(storedid) : '';
      } catch (error) {
        console.error('Error parsing id from localStorage:', error);
      }
    }
    return '';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('id', id);
    }
  }, [id]);

  return (
    <AppContext.Provider value={{ id, setid }}>
      {children}
    </AppContext.Provider>
  );
};

export default ServiceContext;
