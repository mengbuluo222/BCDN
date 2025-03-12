import React from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';
import { EyeOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons';
import Tabs from '@/components/Tabs';
import styled from 'styled-components';

const Home = () => {
  const tabslist = [
    { label: '全部', key: 'all' },
    { label: '区块链', key: 'blockchain' },
    { label: '智能合约', key: 'contract' },
    { label: '加密货币', key: 'crypto' },
    { label: 'Web3', key: 'Web3' },
    { label: 'DeFi', key: 'DeFi' },
    { label: '元宇宙', key: 'meta' },
  ];

  const BlogPost = styled.div`
    padding: 20px 0;
    border-top: 1px solid #f0f0f0;
    
    &:hover {
      background-color: #fafafa;
    }
  `;

  const blogPosts = [
    {
      id: 1,
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

  const onTabClick = (item, index) => {
    // console.log(item, 'onTabClick');
  }

  return (
    <div>
      <Tabs tabslist={tabslist} onTabClick={onTabClick} />

      <div className="flex h-[calc(100vh-48px)] max-w-7xl mx-auto mt-4">
        {/* 左侧内容区 */}
        <div className="w-3/4 overflow-y-auto pr-6 scrollbar-hide [&::-webkit-scrollbar]:hidden">
          {/* 推荐内容 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">推荐内容</h2>
            {blogPosts.map(post => (
              <BlogPost key={post.id}>
                <Row gutter={16} align="top">
                  <Col span={18}>
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
          </div>
        </div>

        {/* 右侧侧边栏 */}
        <div className="w-1/4">
          {/* 热门标签 */}
          <div className="mb-8 p-4 bg-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4">热门标签</h3>
            <div className="flex flex-wrap gap-2">
              {['区块链', '智能合约', 'Web3', 'DeFi', 'NFT'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
          <Divider />

          {/* 热门文章 */}
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">热门文章</h3>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="mb-3">
                <p className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer">热门文章标题 {i + 1}</p>
              </div>
            ))}
          </div>

          {/* 广告位 */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              广告位
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;