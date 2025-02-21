import React from 'react';
import { Layout, Typography } from 'antd';


const { Content, Footer } = Layout;

const { Title } = Typography;

function Home() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
     
      <Title level={2}>首页</Title>
      <Content>中间</Content>
    </Layout>
  );
}

export default Home;