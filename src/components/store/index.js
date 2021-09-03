import { configureStore } from "@reduxjs/toolkit";
import uiSlide from "./ui-slice";
import cartSlide from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlide.reducer,
    cart: cartSlide.reducer,
  },
});

export default store;
