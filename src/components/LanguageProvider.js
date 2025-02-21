import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh-CN');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'zh-CN' ? 'en-US' : 'zh-CN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageProvider;
