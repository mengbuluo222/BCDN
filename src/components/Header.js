import React, { useState } from 'react';
import { Menu, Input, Button, ConfigProvider } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  FileTextOutlined,
  ToolOutlined,
  BookOutlined,
  CalendarOutlined,
  BulbOutlined
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

const { Search } = Input;
const items = [
  {
    label: <Link to="/home">首页</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to="/blog">博客</Link>,
    key: 'blog',
    icon: <BookOutlined />
  },{
    label: <Link to="/learning">学习</Link>,
    key: 'learning',
    icon: <CalendarOutlined />
  },
  {
    label: <Link to="/quiz">智慧问答</Link>,
    key: 'quiz',
    icon: <BulbOutlined />
  },
  // {
  //   label: <Link to="/download">资源下载</Link>,
  //   key: 'download',
  //   icon: <FileTextOutlined />
  // },
  {
    label: <Link to="/invite">招聘</Link>,
    key: 'invite',
    icon: <ToolOutlined />
  },
];

export default function Header() {
  // const { language } = useLanguage();

  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const onSearch = (value) => console.log(value);
  return (
    <div className="h-[48px] shadow-md flex justify-around items-center fixed top-0 right-0 left-0" style={{ background: "#fff", padding: "20px" }}>
      {/* logo */}
      <div className="flex items-center">
        <img className="w-10 h-10 mr-2" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
        <span className="font-medium">BCDN</span>
      </div>
      {/* menu */}
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} overflowedIndicator={null} />
      {/* search */}
      <Search placeholder="input search text" onSearch={onSearch} allowClear style={{
        width: 250,
      }} />

      <div>
        {/* <Link to="/download">资源下载</Link>
        <Link to="/invite">招聘</Link> */}
        
        {/* language */}
        <LanguageSwitcher />
        
        <Button color="primary" variant="solid">
          Connect
        </Button>
      </div>
    </div>
  )
}
