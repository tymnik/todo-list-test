import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
