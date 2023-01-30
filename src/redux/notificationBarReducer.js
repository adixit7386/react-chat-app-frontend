import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notificationbar",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleNotificationBar: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleNotificationBar } = notificationSlice.actions;

export default notificationSlice.reducer;
