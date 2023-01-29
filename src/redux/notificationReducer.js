import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notification: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (!state.notification.includes(action.payload)) {
        // state.notification.push(action.payload);
        state.notification = action.payload;
      }
    },
    removeMessage: (state, action) => {
      if (!state.notification.includes(action.payload)) {
        state.notification.push(action.payload);
        state.notification.slice(state.notification.indexOf(action), 1);
      }
    },
  },
});

export const { addMessage, removeMessage } = notificationSlice.actions;

export default notificationSlice.reducer;
