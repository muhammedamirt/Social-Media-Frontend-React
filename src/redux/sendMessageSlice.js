import { createSlice } from '@reduxjs/toolkit';

const sendMessageSlice = createSlice({
  name: 'sendMessage',
  initialState: {
    sendMessage:null
  },
  reducers: {
   addSendMessage(state, actions) {
      const newItem = actions.payload;
      state.sendMessage = newItem;
    },
  },
});

export const {addSendMessage,removeSendMessage} = sendMessageSlice.actions;
export const sendMessage = (state)=>state.sendMessage.sendMessage
export default sendMessageSlice;
