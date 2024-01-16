import { useEffect, useState } from 'react';

export default function UseDarkSide() {
  // Retrieve the theme from local storage or default to some value
  const [theme, setTheme] = useState(() => {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      return localStorage.theme || 'defaultTheme';
    } else {
      // Handle the case where localStorage is not available
      return 'defaultTheme';
    }
  });

  // Determine the color theme based on the current theme
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  // useEffect hook to apply changes when the theme or colorTheme changes
  useEffect(() => {
    // Access the root element of the document
    const root = window.document.documentElement;

    // Remove the current color theme class
    root.classList.remove(colorTheme);

    // Add the current theme class
    root.classList.add(theme);

    // Save the theme to local storage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]); // Trigger useEffect when theme or colorTheme changes

  // Return the colorTheme and setTheme function to be used in components
  return [colorTheme, setTheme];
}
