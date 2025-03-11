import React, { useState } from 'react';
import { Button } from 'antd';

export default function Tabs({ tabslist, onTabClick }) {
  const [active, setActive] = useState('all');

  const handleClick = (item, index) => {
    console.log(item, index, 'onTabClick');
    setActive(item.key);
    onTabClick && onTabClick(item, index);
  }
  
  return (
    <div>
      {tabslist.map((item, index) => {
        return (
          <Button 
          className={[active == item.key ? 'active-tab' : 'inactive-tab', 'mr-2 border-none']}
          key={index} 
          variant="text"
          onClick={() => handleClick(item, index)}
          >{item.label}</Button>
        )
      })}
    </div>
  )
}
