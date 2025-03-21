import { configureStore } from '@reduxjs/toolkit';
import authReducer from './modules/authReducer';
import languageReducer from './modules/languageReducer';

const store = configureStore(
  {
    reducer: {
      auth: authReducer,
      language: languageReducer
    }
  }
);

export default store;