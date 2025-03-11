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
      {/* 左侧占位 */}
      <div className="flex-1"></div>
      
      {/* 搜索框 */}
      <div className="flex justify-center flex-1">
        <Search 
          placeholder="input search text" 
          onSearch={onSearch} 
          allowClear 
          className="w-full max-w-[600px]" 
        />
      </div>

      {/* 右侧内容 */}
      <div className="flex-1 flex justify-end items-center space-x-4">
        <LanguageSwitcher />
        <Button color="primary" variant="solid">
          Connect
        </Button>
      </div>
    </div>
  )
}
