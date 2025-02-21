import React from 'react';
import { Layout, Menu, Avatar } from 'antd';

const { SubMenu } = Menu;

function UserCenter() {
  return (
    <Layout style={{ padding: '24px 16px' }}>
      <Avatar size="large" icon={<UserOutlined />} />
      <Menu mode="inline">
        <SubMenu key="sub1" title={<span>关注、收藏、获赞</span>} />
        <SubMenu key="sub2" title={<span>个人中心</span>} />
        <SubMenu key="sub3" title={<span>内容管理</span>} />
        <SubMenu key="sub4" title={<span>我的钱包</span>} />
        <SubMenu key="sub5" title={<span>我的等级</span>} />
      </Menu>
    </Layout>
  );
}

export default UserCenter;