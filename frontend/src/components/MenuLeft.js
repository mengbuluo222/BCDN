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
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  && { 
    // 使用 && 提高 CSS 优先级
    border-bottom: none;
    
    .ant-menu-item {
      &:hover {
        color: #000 !important;
      }
      
      &.ant-menu-item-selected {
        font-weight: bold !important;
        color: #000 !important;
        background-color: #f0f0f0!important;
        
        &::after {
          display: none !important;
        }
      }
    }
  }
`;

const items = [
  {
    label: <Link to="/home">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to="/blog">Blog</Link>,
    key: 'blog',
    icon: <BookOutlined />
  },{
    label: <Link to="/learning">Learn</Link>,
    key: 'learning',
    icon: <CalendarOutlined />
  },
  {
    label: <Link to="/quiz">Quiz</Link>,
    key: 'quiz',
    icon: <BulbOutlined />
  },
  // {
  //   label: <Link to="/download">资源下载</Link>,
  //   key: 'download',
  //   icon: <FileTextOutlined />
  // },
  {
    label: <Link to="/jobs">Jobs</Link>,
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
      <StyledMenu className="text-left no-right-border" onClick={onClick} selectedKeys={[current]} mode="inline" items={items} overflowedIndicator={null} />
    </div>
  )
}
