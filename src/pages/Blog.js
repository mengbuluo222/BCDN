import React from 'react';
import { Layout, Tabs, List } from 'antd';

const { TabPane } = Tabs;

function Blog() {
  const blogItems = [
    { title: '博客标题1', author: '作者1', content: '博客内容1' },
    { title: '博客标题2', author: '作者2', content: '博客内容2' },
    // 更多博客项
  ];

  return (
    <Layout style={{ padding: '24px 16px' }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="推荐列表" key="1">
          <List
            itemLayout="vertical"
            dataSource={blogItems}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.content}
                  avatar={<span>{item.author}</span>}
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="作者推荐" key="2">
          {/* 作者推荐列表 */}
        </TabPane>
      </Tabs>
    </Layout>
  );
}

export default Blog;