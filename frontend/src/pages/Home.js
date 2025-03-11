import React from 'react';
import { Layout, Typography } from 'antd';
import Tabs from '../components/Tabs';

const tabslist = [
  { label: '全部', key: 'all' },
  { label: '区块链', key: 'blockchain' },
  { label: '智能合约', key: 'contract' },
  { label: '加密货币', key: 'crypto' },
  { label: 'Web3', key: 'Web3' },
  { label: 'DeFi', key: 'DeFi' },
  { label: '元宇宙', key: 'meta' },
];

const onTabClick = (item, index) => {
  // console.log(item, 'onTabClick');
}

function Home() {
  return (
    <div>
      <Tabs tabslist={tabslist} onTabClick={onTabClick} />

      <div className="flex h-[calc(100vh-48px)] max-w-7xl mx-auto px-4">
        {/* 左侧内容区 */}
        <div className="w-3/4 overflow-y-auto pr-6 scrollbar-hide [&::-webkit-scrollbar]:hidden">
          {/* 推荐内容 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">推荐内容</h2>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="mb-6 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">文章标题 {i + 1}</h3>
                <p className="text-gray-600">这里是文章的简要内容...</p>
              </div>
            ))}
          </div>

          {/* 最新内容 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">最新内容</h2>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="mb-6 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">最新文章 {i + 1}</h3>
                <p className="text-gray-600">这里是文章的简要内容...</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 右侧侧边栏 */}
        <div className="w-1/4">
          {/* 热门标签 */}
          <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">热门标签</h3>
            <div className="flex flex-wrap gap-2">
              {['区块链', '智能合约', 'Web3', 'DeFi', 'NFT'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tag}</span>
              ))}
            </div>
          </div>

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