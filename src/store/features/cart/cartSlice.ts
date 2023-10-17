import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push = action.payload;
    },
    removeProduct: (state, action) => {
      state.cart.push = action.payload;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice;
