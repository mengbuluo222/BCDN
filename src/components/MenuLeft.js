import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  ToolOutlined,
  BookOutlined,
  CalendarOutlined,
  BulbOutlined
} from '@ant-design/icons';

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

export default function MenuLeft() {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu className="text-left no-right-border" onClick={onClick} selectedKeys={[current]} mode="inline" items={items} overflowedIndicator={null} />
    </div>
  )
}
