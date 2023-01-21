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
  },
});

export const { setActiveChat } = activeChatSlice.actions;

export default activeChatSlice.reducer;
