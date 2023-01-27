import { createSlice } from "@reduxjs/toolkit";

const activeChatSlice = createSlice({
  name: "activechat",
  initialState: {
    active: null,
  },
  reducers: {
    setActiveChat: (state, action) => {
      state.active = action.payload;
    },
    resetActiveChat: (state) => {
      state.active = null;
    },
  },
});

export const { setActiveChat, resetActiveChat } = activeChatSlice.actions;

export default activeChatSlice.reducer;
