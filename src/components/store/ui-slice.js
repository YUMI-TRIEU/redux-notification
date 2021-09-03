import { createSlice } from "@reduxjs/toolkit";

const uiSlide = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlide.actions;

export default uiSlide;
