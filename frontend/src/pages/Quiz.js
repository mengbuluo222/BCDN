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
            description: '如何更换npm的源'
        },
        {
            id: 2,
            title: '如何注册cnpm',
            description: '如何注册cnpm账号'
        },
        {
            id: 6,
            title: 'nextjs 静态博客',
            description: '如何使用Next.js搭建静态博客'
        },
        {
            id: 3,
            title: 'npm换源',
            description: '如何更换npm的源'
        },
        {
            id: 4,
            title: '如何注册cnpm',
            description: '如何注册cnpm账号'
        },
        {
            id: 5,
            title: 'nextjs 静态博客',
            description: '如何使用Next.js搭建静态博客'
        },
    ];

    return (
        <div style={{ padding: '20px' }}>
            {/* Logo and Title */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <strong className="text-2xl">B智答</strong>
                <h3 className="mt-2">web3开发者的首选AI搜索引擎</h3>
            </div>

            {/* Search Box */}
            <div style={{ border: '2px solid #845EF7', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
                <StyledInput 
                    placeholder="输入提问内容..." 
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
            <h5>你可以试试这样问我</h5>
            <Row className="mt-2" gutter={[16, 16]}>
                {recommendedQuestions.map((question) => (
                    <Col className="text-xs" span={8}>
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