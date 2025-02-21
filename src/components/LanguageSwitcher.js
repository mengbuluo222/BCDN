import React from 'react';
import { useLanguage } from './LanguageProvider';
import { DribbbleOutlined } from '@ant-design/icons';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage} className="text-sm w-24">
      <DribbbleOutlined className="mx-2" />
      {language === 'zh-CN' ? 'En' : '中文'}
    </button>
    
  );
};

export default LanguageSwitcher;
