import React, { useState } from 'react';
import { Layout } from 'antd'
import Sidebar from '../Sidebar';
import SideNav from '../Sidenav';

const { Header, Sider, Content } = Layout;

const DashboardProvider = ({ children, onClose }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Sidebar />
        </Sider>
        <Layout className={`bg-primary-blue400 dark:bg-primary-white`}>
          <Header style={{ padding: 0 }}>
            <SideNav onClose={onClose} setCollapsed={setCollapsed} collapsed={collapsed} />
          </Header>
          <Content
            className={`bg-primary-blue500 dark:bg-primary-light h-screen`}
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
  );
};

export default DashboardProvider;
