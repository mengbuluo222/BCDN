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
        name: "乐闻x",
        avatar: "/avatar1.jpg"
      },
      title: "微前端最佳实践：Module Federation 的使用步骤详解",
      description: "在前端开发领域，微前端（Micro Frontends）是一种将单一前端应用拆分成多个小型、独立且可独立部署的...",
      coverImage: require('@/assets/images/test.png'),
      stats: {
        views: 571,
        likes: 15,
        bookmarks: 13
      }
    },
    {
      id: 2,
      author: {
        name: "乐闻x",
        avatar: "/avatar1.jpg"
      },
      title: "微前端最佳实践：Module Federation 的使用步骤详解",
      description: "在前端开发领域，微前端（Micro Frontends）是一种将单一前端应用拆分成多个小型、独立且可独立部署的...",
      coverImage: require('@/assets/images/test.png'),
      stats: {
        views: 571,
        likes: 15,
        bookmarks: 13
      }
    },
    // ... 其他博客文章
  ];

  const recommendedAuthors = [
    {
      name: "csdn业界要闻",
      description: "TA很懒，还没有添加简介",
      avatar: "/author1.jpg"
    },
    // ... 其他推荐作者
  ];
  const tabslist = [
    { label: '推荐', key: 'all' },
    { label: '付费专栏', key: 'blockchain' },
    { label: 'VIP文章', key: 'contract' }
  ];
  const ButtonList = [
    { label: '全部', key: 'all' },
    { label: '区块链', key: 'blockchain' },
    { label: '智能合约', key: 'contract' }
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
      <Tabs tabslist={tabslist} onTabClick={onTabClick} />

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
                    <span><EyeOutlined /> 阅读 {post.stats.views}</span>
                    <span><LikeOutlined /> {post.stats.likes} 赞</span>
                    <span> 收藏 {post.stats.bookmarks}</span>
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
            <h3 style={{ marginBottom: '20px', fontWeight: 'bold' }}>作者推荐</h3>
            {recommendedAuthors.map((author, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={author.avatar} />
                  <div style={{ marginLeft: '12px' }}>
                    <div>{author.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>{author.description}</div>
                  </div>
                </div>
                <Button className="text-xs" size="small">关注</Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;