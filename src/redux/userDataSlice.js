import { createSlice } from '@reduxjs/toolkit';

const saveUserData = createSlice({
  name: 'userData',
  initialState: {
    userData:''
  },
  reducers: {
    addUserData(state, actions) {
      const newItem = actions.payload;
      state.userData = newItem
    },
    removeUserData(state){
        state.userData = ''
    }
  },
});

export const {addUserData,removeUserData} = saveUserData.actions;

export default saveUserData;