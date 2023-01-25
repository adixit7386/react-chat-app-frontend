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
    updateUserChats: (state, action) => {
      for (var i = 0; i < state.chats.length; i++) {
        if (action.payload._id === state.chats[i]._id) {
          state.chats[i] = action.payload;
        }
      }
    },
  },
});

export const { setUserChats, addUserChats, updateUserChats } =
  userChatsSlice.actions;

export default userChatsSlice.reducer;
