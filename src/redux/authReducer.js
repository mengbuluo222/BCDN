import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {

      console.log(action.payload,'action.payload');
      
      state.token = action.payload;
      // 持久化存储
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
  }
})

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;