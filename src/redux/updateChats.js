import { createSlice } from "@reduxjs/toolkit";

const updateChatSlice = createSlice({
  name: "updatechat",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleUpdateChat: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleUpdateChat } = updateChatSlice.actions;

export default updateChatSlice.reducer;
