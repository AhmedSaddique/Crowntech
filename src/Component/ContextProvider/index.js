// Create a file named NavBarContext.js
"use client"
import { createContext, useState, useContext } from 'react';
import Header from '../Header';

export const NavbarContext = createContext("");

export const ContextProvider = ({ children }) => {

  return (
    <NavbarContext.Provider value={{ Header }}>
         {children}  
    </NavbarContext.Provider>
  );
};
