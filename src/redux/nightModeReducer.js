import { createSlice } from "@reduxjs/toolkit";

const nightModeSlice = createSlice({
  name: "nightmode",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleNightMode: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleSidebar } = nightModeSlice.actions;

export default nightModeSlice.reducer;
