"use client"
import React, { useState } from 'react';
import UseDarkSide from '../UseDarkSide';

export default function Switcher() {
  const [colorTheme, setTheme] = UseDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(checked ? 'dark' : 'light'); // Assuming useDarkSide expects 'dark' or 'light'
    setDarkSide(checked);
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input className="sr-only peer" type="checkbox" checked={darkSide} onChange={(e) => toggleDarkMode(e.target.checked)} size={56} />
        <div
          className={`w-10 h-10 rounded-full ring-0 peer duration-500 outline-none bg-primary-white shadow overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-before:content-[${
            colorTheme === "light" ? "☀️" : "🌑"
          }] after:content-['☀️']  before:absolute before:h-8 before:w-8 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full   peer-checked:bg-primary-white before:content-['🌑'] after:absolute after:bg-primary-blue500 after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-8 after:h-8 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0`}
        ></div>
      </label>
    </>
  );
}
