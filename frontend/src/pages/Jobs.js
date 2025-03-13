import React from 'react';
import { Row, Col, Card, Avatar, Tag, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import styled from 'styled-components';

const Invite = () => {
  const InviteCard = styled(Card)`
  && {
  .ant-card-body{
    padding: 10px;
  }
    border-radius: 8px;
    transition: all 0.3s;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  }
`;

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  const jobList = [
    {
      id: 1,
      logo: 'https://placehold.co/60x60',
      title: 'Brand manager',
      company: 'Miners Club (30+ Staff)',
      location: 'remote',
      type: 'fulltime',
      salary: '$3,000 - $5,000 / month',
      time: 'a day ago',
      more: 'more'
    },
    {
      id: 7,
      logo: 'https://placehold.co/60x60',
      title: 'Chief operating officer',
      company: 'Coinstore (100+ Staff)',
      location: 'On-Site',
      type: 'fulltime',
      salary: '$11,000 - $15,000 / month',
      time: 'a day ago',
      more: 'more'
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="text-xl font-bold mb-4">浏览1320家Web3公司的5364个职位</h2>
      <Row gutter={[16, 16]} >
        {jobList.map((job) => (
          <Col key={job.id} span={24}>
            <InviteCard className="p-[5px]">
              <Row gutter={[16, 16]} align="middle">
                <Col span={2}>
                  <Avatar src={job.logo} size={60} />
                </Col>
                <Col span={7}>
                  <div className="flex">
                    <h3>{job.title}</h3>
                    <Tag color="orange" style={{ marginLeft: '8px', fontSize: '10px' }}>URG</Tag>
                  </div>
                  <p style={{color: '#999'}}>{job.company}</p>
                </Col>
                <Col span={2}>
                  <p>{job.location}</p>
                </Col>
                <Col span={2}>
                  <p>{job.type}</p>
                </Col>
                <Col span={6}>
                  <p style={{ color: '#f5c04f', fontWeight: 'bold' }}>{job.salary}</p>
                </Col>
                <Col span={3} style={{ textAlign: 'right' }}>
                  <span>{job.time}</span>
                </Col>
                <Col span={2} style={{ textAlign: 'right' }}>
                  <Button type="default" size="small" color="#eeeeee" style={{ marginLeft: '8px', fontSize: '12px', background: '#eee', color: '#555' }}>{job.more}</Button>
                </Col>
              </Row>
            </InviteCard>
          </Col>
        ))}
      </Row>
      <Pagination
        className="mt-4"
        align="center" 
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </div>
  );
};

export default Invite;