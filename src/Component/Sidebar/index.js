"use client"
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Sidebar = () => {
 // State to manage whether the sidebar is collapsed
 const [collapsed, setCollapsed] = useState(true);

 // Function to handle window resize
 const handleResize = () => {
   if (window.innerWidth <= 768) {
     setCollapsed(true);
   } else {
     setCollapsed(false);
   }
 };

 // Effect hook to add/remove window resize listener
 useEffect(() => {
   handleResize(); // Set initial state based on current window size
   window.addEventListener('resize', handleResize);

   // Cleanup the event listener on component unmount
   return () => window.removeEventListener('resize', handleResize);
 }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className={`h-full z-20 shadow flex flex-col transition-width duration-300 'bg-primary-blue500 dark:bg-primary-white`}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        className={`flex-grow shadow backdrop-blur-3xl md:backdrop-blur-none px-2 pt-5 z-20 bg-primary-blue500 text-white  dark:bg-primary-white dark:text-black`}
      >
        <Menu.Item key="1" icon={<MailOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link href="/dashboard/service">Service</Link>
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<SettingOutlined />} title="Navigation One">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
