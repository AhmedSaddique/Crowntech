import React, { useState } from 'react';
import { Layout } from 'antd';
import { ThemeProvider, useTheme } from 'next-themes';
import Sidebar from '../Sidebar';
import SideNav from '../Sidenav';

const { Header, Sider, Content } = Layout;

const DashboardProvider = ({ children, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Sidebar />
        </Sider>
        <Layout className={`${theme === 'dark' ? 'bg-primary-blue400' : ''}`}>
          <Header style={{ padding: 0 }}>
            <SideNav onClose={onClose} setCollapsed={setCollapsed} collapsed={collapsed} />
          </Header>
          <Content
            className={`${theme === 'dark' ? 'bg-primary-blue500' : 'bg-primary-light'} h-screen`}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default DashboardProvider;
