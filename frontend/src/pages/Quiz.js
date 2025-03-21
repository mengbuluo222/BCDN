import React from 'react';
import { Input, Space, Button, Card, Row, Col } from 'antd';

import { SearchOutlined, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components'
const { TextArea } = Input;
// 定义样式化的 Input 组件
const StyledInput = styled(TextArea)`
  &:focus {
    box-shadow: none;
  }
`;

const Quiz = () => {
    const recommendedQuestions = [
        {
            id: 1,
            title: 'npm换源',
            description: 'How do I register for Our b3 Wallet？'
        },
        {
            id: 2,
            title: '如何注册cnpm',
            description: 'How do I save my we b3 wallet？'
        },
        {
            id: 6,
            title: 'nextjs 静态博客',
            description: 'What is blockchain？'
        },
        {
            id: 3,
            title: 'npm换源',
            description: 'What is a block'
        },
        {
            id: 4,
            title: '如何注册cnpm',
            description: 'What can Blockchain do'
        },
        {
            id: 5,
            title: 'nextjs 静态博客',
            description: 'What is a NFT'
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            {/* Logo and Title */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <strong className="text-2xl">B Intelligent answer</strong>
                <h3 className="mt-2">The AI search engine of choice for web3 developers</h3>
            </div>

            {/* Search Box */}
            <div style={{ border: '2px solid #845EF7', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                <StyledInput 
                    placeholder="Input your qustion..." 
                    style={{
                        width: '100%', 
                        marginBottom: '10px', 
                        border: 'none'
                    }}
                />
                <Row gutter={[16, 16]}>
                    {/* <Col span={12}>
                        <Switch checkedChildren="深度思考" unCheckedChildren="浅度思考" defaultChecked />
                    </Col> */}
                    <Col span={22}></Col>
                    <Col span={2} style={{ textAlign: 'right' }}>
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Col>
                </Row>
            </div>

            {/* Recommended Questions */}
            <h5>You can try asking me that</h5>
            <Row className="mt-2" gutter={[16, 16]}>
                {recommendedQuestions.map((question) => (
                    <Col className="text-xs" span={8} key={question.id}>
                        <div className="flex justify-between" style={{ boxShadow: "4px 4px 15px rgba(0,0,0,.1)", lineHeight: "40px", borderRadius: "5px", paddingLeft: "10px" }} key={question.id}>
                            <p>{question.description}</p>
                            <RightOutlined className="mr-2 text-xs" />
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Quiz;