import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.items.find((x) => x.id === newItem.id);
      state.totalQuantity++;
      if (!existItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice = existItem.totalPrice + existItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const existItem = state.items.find((x) => x.id === id);
      if (existItem.quantity === 1) {
        state.items = state.items.filter((x) => x.id !== id);
      } else {
        existItem.quantity--;
        existItem.totalPrice = existItem.totalPrice - existItem.price;
      }
    },
  },
});

export const cartActions = cartSlide.actions;

export default cartSlide;
