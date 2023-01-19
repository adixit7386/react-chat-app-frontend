import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
  name: "sidebar",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleSidebar } = sideSlice.actions;

export default sideSlice.reducer;
