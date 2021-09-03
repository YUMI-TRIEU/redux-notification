import { createSlice } from "@reduxjs/toolkit";

const uiSlide = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      const data = action.payload;
      state.notification = {
        status: data.status,
        title: data.title,
        message: data.message,
      };
    },
  },
});

export const uiActions = uiSlide.actions;

export default uiSlide;
