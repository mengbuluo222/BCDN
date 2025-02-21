import React from 'react';
import { Layout, List } from 'antd';

function News() {
  const newsItems = [
    { title: '新闻标题1', description: '新闻描述1' },
    { title: '新闻标题2', description: '新闻描述2' },
    // 更多新闻项
  ];

  return (
    <Layout style={{ padding: '24px 16px' }}>
      <List
        itemLayout="vertical"
        dataSource={newsItems}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Layout>
  );
}

export default News;