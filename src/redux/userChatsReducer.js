import { createSlice } from "@reduxjs/toolkit";

const userChatsSlice = createSlice({
  name: "chats",
  initialState: {
    chats: [],
  },
  reducers: {
    setUserChats: (state, action) => {
      state.chats = action.payload;
    },
    addUserChats: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const { setUserChats, addUserChats } = userChatsSlice.actions;

export default userChatsSlice.reducer;
