import { createSlice } from "@reduxjs/toolkit";

const activeChatSlice = createSlice({
  name: "activechat",
  initialState: {
    active: {},
  },
  reducers: {
    setActiveChat: (state, action) => {
      state.active = action.payload;
    },
    resetActiveChat: (state) => {
      state.active = {};
    },
  },
});

export const { setActiveChat, resetActiveChat } = activeChatSlice.actions;

export default activeChatSlice.reducer;
