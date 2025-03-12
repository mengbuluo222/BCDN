import React, { useState } from 'react';
import { Menu, Input, Button, ConfigProvider } from 'antd';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageProvider';

const { Search } = Input;

export default function Header() {
  // const { language } = useLanguage();
  const onSearch = (value) => console.log(value);
  return (
    <div className="h-[48px] shadow-md flex justify-between items-center px-4" style={{ background: "#fff" }}>
      
      {/* 搜索框 */}
      <div className="w-full flex justify-center">
        <Search 
          placeholder="input search text" 
          onSearch={onSearch} 
          allowClear 
          className="w-full max-w-[700px]" 
          style={{
            width: '50%'
          }}
        />
      </div>

      {/* 右侧内容 */}
      <div className="flex justify-end items-center space-x-4" style={{
        position: "absolute",
        right: "10px",
      }}>
          <LanguageSwitcher />
          <Button color="primary" variant="solid">
            Connect
          </Button>
        </div>
    </div>
  )
}
