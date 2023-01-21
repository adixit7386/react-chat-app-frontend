import { createSlice } from "@reduxjs/toolkit";

const createGroupSlice = createSlice({
  name: "creategroup",
  initialState: {
    group: false,
  },
  reducers: {
    toggleCreateGroup: (state) => {
      state.group = !state.group;
    },
  },
});

export const { toggleCreateGroup } = createGroupSlice.actions;

export default createGroupSlice.reducer;
