import { createSlice } from '@reduxjs/toolkit';

const userAuth = createSlice({
  name: 'user',
  initialState: {
    userToken: '',
    userId:''
  },
  reducers: {
    userAddDetails(state, actions) {
      const newItem = actions.payload;
      state.userToken = newItem.token;
      state.userId = newItem.id;
    },
    userLogout(state) {
      state.userToken = '';
      state.userId = '';      
    },
  },
});

export const {userAddDetails,userLogout} = userAuth.actions;

export default userAuth;