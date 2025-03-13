import React, { useState } from 'react';
import { Avatar, Row, Col, Button, Image } from 'antd';
import { EyeOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Tabs from '@/components/Tabs';


const Blog = () => {
  const BlogPost = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:hover {
      background-color: #fafafa;
    }
  `;

  const blogPosts = [
    {
      id: 1,
      author: {
        name: "sunny",
        avatar: "/avatar1.jpg"
      },
      title: "EDU Chain Semester 3 Hackathon Ideathon 1: What to build in DeFi now Recap",
      description: "With the launch of the EDU Chain Semester 3 Hackathon, HackQuest hosted an insightful discussion featuring experts from Animoca, OpenCampus, Blend, and HackQuest, including Harry,...",
      coverImage: require('@/assets/images/test.png'),
      stats: {
        views: 571,
        likes: 15,
        bookmarks: 13
      }
    },
    {
      id: 1,
      author: {
        name: "sunny",
        avatar: "/avatar1.jpg"
      },
      title: "EDU Chain Semester 3 Hackathon Ideathon 1: What to build in DeFi now Recap",
      description: "With the launch of the EDU Chain Semester 3 Hackathon, HackQuest hosted an insightful discussion featuring experts from Animoca, OpenCampus, Blend, and HackQuest, including Harry,...",
      coverImage: require('@/assets/images/test.png'),
      stats: {
        views: 571,
        likes: 15,
        bookmarks: 13
      }
    }
    // ... 其他博客文章
  ];

  const recommendedAuthors = [
    {
      name: "NNN",
      description: "He is lazy and hasn't added a profile yet",
      avatar: "/author1.jpg"
    },
    // ... 其他推荐作者
  ];
  const tabslist = [
    { label: 'Recommended', key: 'all' },
    { label: '付费专栏', key: 'blockchain' },
    { label: 'VIP文章', key: 'contract' }
  ];
  const ButtonList = [
    { label: 'All', key: 'all' },
    { label: 'Blockchain', key: 'blockchain' },
    { label: 'Contract', key: 'contract' }
  ];

  const onTabClick = (item, index) => {
    // console.log(item, 'onTabClick');
  }
  const [activeButton, setActiveButton] = useState(0);
  const clickButon = (item, index) => {
    console.log(item, 'clickButon');
    console.log(index, 'clickButon');
    setActiveButton(index);
  }

  return (
    <div>
      {/* 顶部导航 */}
      {/* <Tabs tabslist={tabslist} onTabClick={onTabClick} /> */}

      <Row className="mt-4">
        <Col span={24}>
          <div style={{ display: 'flex' }}>
          {
            ButtonList.map((item, index) => (
              <Button type="text" style={{fontWeight: activeButton == index ? 'bold' : '' }} onClick={() => clickButon(item, index)}>{item.label}</Button>
            ))
          }
          </div>
        </Col>
      </Row>

      {/* 主要内容区域 */}
      <Row gutter={24}>
        {/* 文章列表 */}
        <Col span={18}>
          {blogPosts.map(post => (
            <BlogPost key={post.id}>
              <Row gutter={16} align="top">
                <Col span={18}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <Avatar size="small" src={post.author.avatar} />
                    <span style={{ marginLeft: '8px' }}>{post.author.name}</span>
                  </div>
                  <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h2>
                  <p style={{ color: '#666', marginBottom: '12px' }}>{post.description}</p>
                  <div style={{ display: 'flex', gap: '20px', color: '#666' }}>
                    <span><EyeOutlined /> read {post.stats.views}</span>
                    <span><LikeOutlined /> {post.stats.likes} praise</span>
                    <span> collect {post.stats.bookmarks}</span>
                    <MoreOutlined />
                  </div>
                </Col>
                <Col span={6}>
                  <img
                    src={post.coverImage}
                    alt=""
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                </Col>
              </Row>
            </BlogPost>
          ))}
        </Col>

        {/* 右侧作者推荐 */}
        <Col span={6}>
          <div style={{ position: 'sticky', top: '20px' }}>
            <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>Author recommendation</h3>
            {recommendedAuthors.map((author, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={author.avatar} />
                  <div style={{ marginLeft: '12px' }}>
                    <div>{author.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{author.description}</div>
                  </div>
                </div>
                <Button className="text-xs" size="small">follow</Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;