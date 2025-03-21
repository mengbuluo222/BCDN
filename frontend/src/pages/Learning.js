import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card, Tag } from 'antd';
import { useSearchParams } from 'react-router-dom';

// 样式组件
const CourseCard = styled(Card)`
  && {
    border-radius: 8px;
    transition: all 0.3s;
    cursor: pointer;
    height: 340px; // 设置固定高度

    .ant-card-body {
      height: 160px; // 设置内容区域固定高度
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between; // 内容垂直均匀分布
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
  }
`;

const CourseTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 1; // 标题最多显示2行
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 25px; // 给定固定高度
`;

const CourseDesc = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 64px; // 给定固定高度
`;

const PriceTag = styled.span`
  color: #ff4d4f;
  font-size: 16px;
  font-weight: bold;
`;

const StatsInfo = styled.span`
  color: #999;
  font-size: 12px;
  margin-left: 10px;
`;

const CourseTag = styled(Tag)`
  position: absolute;
  top: 8px;
  left: 8px;
  border: none;
`;

const Learning = (props) => {
  console.log(props, 'props');
  
  const courses = [
    {
      id: 1,
      title: 'Web3 General Fundamentals course',
      description: "This article will take you inside the world of Web3. Let's start with the birth of Web3.",
      price: 499.00,
      studentsCount: 349158,
      lessonsCount: 41,
      tag: '套餐课',
      coverImage: require('@/assets/images/test.png'),
    },
    {
      id: 2,
      title: 'Web3 General Fundamentals course',
      description: "This article will take you inside the world of Web3. Let's start with the birth of Web3.",
      price: 69.00,
      studentsCount: 116152,
      lessonsCount: 21,
      tag: '套餐课',
      coverImage: require('@/assets/images/test2.png'),
    },
    // ... 更多课程
  ];

  const [ params ] = useSearchParams();
  const id = params.get('id');

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Recommended</h2>
      <Row gutter={[16, 16]}>
        {courses.map(course => (
          <Col xs={24} sm={12} md={8} lg={6} key={course.id}>
            <CourseCard
              cover={
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    alt={course.title}
                    src={course.coverImage}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                  />
                  {/* <CourseTag color={course.tag === '套餐课' ? '#ff9800' : '#1890ff'}>
                    {course.tag}
                  </CourseTag> */}
                </div>
              }
              bodyStyle={{ padding: '12px' }}
            >
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDesc>{course.description}</CourseDesc>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  {/* <PriceTag>¥{course.price.toFixed(2)}</PriceTag> */}
                  <StatsInfo>Sum {course.lessonsCount} lesson · {course.studentsCount} person learning
                  </StatsInfo>
                </div>
              </div>
            </CourseCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Learning;