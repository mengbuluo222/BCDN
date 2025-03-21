import React from 'react';
import { Layout, Typography, Divider, Row, Col } from 'antd';
import { EyeOutlined, LikeOutlined, MoreOutlined } from '@ant-design/icons';
import Tabs from '@/components/Tabs';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

const Home = () => {
  const intl = useIntl();

  const tabslist = [
    { label: 'all', key: 'all' },
    { label: 'blockchain', key: 'blockchain' },
    { label: 'contract', key: 'contract' },
    { label: 'crypto', key: 'crypto' },
    { label: 'Web3', key: 'Web3' },
    { label: 'DeFi', key: 'DeFi' },
    { label: 'Meta', key: 'meta' },
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
      title: "EDU Chain Semester 3 Hackathon Ideathon 1: What to build in DeFi now Recap",
      description: "With the launch of the EDU Chain Semester 3 Hackathon, HackQuest hosted an insightful discussion featuring experts from Animoca, OpenCampus, Blend, and HackQuest, including Harry, Troy, Shan, Prince, and Kevin, to explore the current DeFi landscape and its future within the EDU Chain. The session covered the maturity of DeFi, the impact of AI integration for enhanced user experience, and new opportunities in sectors like PayFi and real-world assets....",
      coverImage: require('@/assets/images/test.png'),
      stats: {
        views: 571,
        likes: 15,
        bookmarks: 13
      }
    },
    {
      id: 2,
      title: "Expanding DeFi Sectors & Capital Efficiency",
      description: "Many assets now have liquid markets on centralized exchanges (CEXs), perpetual swaps, and funding rates, creating new yield opportunities. But how do we build DeFi infrastructure for tokens that aren’t Bitcoin or traditional T-bills—assets that have been overlooked yet hold significant capital efficiency potential...",
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

      <div className="flex h-[calc(100vh-48px)] mx-auto mt-4">
        {/* 左侧内容区 */}
        <div className="w-3/4 overflow-y-auto pr-6 scrollbar-hide [&::-webkit-scrollbar]:hidden">
          {/* 推荐内容 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Recommended</h2>
            {blogPosts.map(post => (
              <BlogPost key={post.id}>
                <Row gutter={16} align="top">
                  <Col span={19}>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h2>
                    <p style={{ color: '#666', marginBottom: '12px' }}>{post.description}</p>
                    <div style={{ display: 'flex', gap: '20px', color: '#666' }}>
                      <span><EyeOutlined /> read {post.stats.views}</span>
                      <span><LikeOutlined /> {post.stats.likes} praise</span>
                      <span> collect {post.stats.bookmarks}</span>
                      <MoreOutlined />
                    </div>
                  </Col>
                  <Col span={5}>
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
          <h1>{intl.formatMessage({ id: 'greeting' })}</h1>
        </div>

        {/* 右侧侧边栏 */}
        <div className="w-1/4">
          {/* 热门标签 */}
          <div className="mb-8 p-4 bg-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Hot tags</h3>
            <div className="flex flex-wrap gap-2">
              {['blockchain', 'contract', 'Web3', 'DeFi', 'NFT'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>
          <Divider />

          {/* 热门文章 */}
          <div className="mb-8 p-4 bg-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Hot article</h3>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="mb-3">
                <p className="text-sm text-gray-700 hover:text-blue-500 cursor-pointer">EDU Chain Semester 3 Hackathon Ideathon 1: What to build in DeFi now Recap {i + 1}</p>
              </div>
            ))}
          </div>
          <Divider />

          {/* 广告位 */}
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <img
                src={require('@/assets/images/test3.png')}
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;