import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useDispatch } from 'react-redux';
import { setToken } from './redux/authReducer'
import Web3 from 'web3';
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  FileTextOutlined,
  ToolOutlined,
  DollarCircleOutlined,
  StarOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [web3, setWeb3] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
    
          
          dispatch(setToken(accounts[0]));
          setWeb3(web3Instance);
        } catch (error) {
          console.error('用户拒绝授权或发生错误:', error);
        }
      } else {
        console.error('请安装 MetaMask 钱包。');
      }
    };

    initWeb3();
  }, []);

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsedWidth="0">
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SearchOutlined />}>
              <Link to="/search">搜索</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/login">登录</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileTextOutlined />}>
              <Link to="/news">资讯头条</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ToolOutlined />}>
              <Link to="/blog">博客</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<DollarCircleOutlined />}>
              <Link to="/user-center">用户中心</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<StarOutlined />}>
              <Link to="/learning">学习</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<LogoutOutlined />}>
              <Link to="/logout">退出</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Components</Breadcrumb.Item>
              <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/* 页面内容 */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>BCDN ©2023 Created by BCDN</Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;