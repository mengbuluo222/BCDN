import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DribbbleOutlined } from '@ant-design/icons';
import { setLanguage, setLocale } from '../redux/modules/languageReducer';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';
dayjs.locale('en');


const LanguageSwitcher = () => {
  const [ currentLanguage, setCurrentLanguage ] = useState('English');
  const language = useSelector((state) => state.language);
  // console.log(language,'language');
  
  const dispatch = useDispatch();
  const clickToggle = () => {
    if (currentLanguage === 'English') {
      setCurrentLanguage('中文');
      dispatch(setLanguage('zh'));
      dispatch(setLocale(zhCN));
      dayjs.locale('zh');
    } else {
      setCurrentLanguage('English');
      dispatch(setLanguage('en'));
      dispatch(setLocale(enUS));
      dayjs.locale('en');
    }
  };

  return (
    <button onClick={clickToggle} className="text-sm w-24">
      <DribbbleOutlined className="mx-2" />
      {currentLanguage}
    </button>
    
  );
};

export default LanguageSwitcher;
