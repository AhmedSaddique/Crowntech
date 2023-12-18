// Create a file named NavBarContext.js
"use client"
import { createContext, useState, useContext } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

export const NavbarContext = createContext("");
export const SidebarContext = createContext("");

export const ContextProvider = ({ children }) => {

  return (
    <NavbarContext.Provider value={{ Header }}>
      <SidebarContext.Provider value={{ Sidebar }}>
         {children}  
      </SidebarContext.Provider>
    </NavbarContext.Provider>
  );
};
