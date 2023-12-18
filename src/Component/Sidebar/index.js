"use client"
import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Logo from '../Logo';

const Sidebar = ({ collapsed }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={` h-full z-20 shadow flex flex-col transition-width duration-300 ${theme === 'dark' ? 'bg-primary-blue500  ' : 'bg-primary-white '
  }`}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
        className={`flex-grow  shadow backdrop-blur-3xl md:backdrop-blur-none px-2 pt-5 z-20 ${theme === 'dark' ? 'bg-primary-blue500 text-white ' : 'bg-primary-white '
      }`}
      >

        <Menu.Item key="1" icon={<MailOutlined />}>
         <Link href={'/dashboard'}>
         Dashboard
         </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
        <Link href={'/dashboard/service'}>
         Service
         </Link>
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
