import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
  name: "accountbar",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleAccountBar: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleAccountBar } = sideSlice.actions;

export default sideSlice.reducer;
