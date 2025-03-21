import { createSlice } from '@reduxjs/toolkit';
import enUS from 'antd/locale/en_US';
const languageStore = createSlice({
  name: 'language',
  initialState: {
    language: 'en',
    locale: enUS,
  },
  reducers: {
    setLanguage: (state, action) => {
      console.log('setLanguage', state, action);
      
      state.language = action.payload;
      // setLanguage(prevLanguage => (prevLanguage === 'zh-CN' ? 'en-US' : 'zh-CN'));
    },
    setLocale: (state, action) => {
      console.log('setLocale', state, action);
      
      state.locale = action.payload;
    }
  }
})
export const { setLanguage, setLocale } = languageStore.actions;
export default languageStore.reducer;