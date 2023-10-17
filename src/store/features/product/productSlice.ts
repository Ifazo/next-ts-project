import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
    removeProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct, removeProduct } =
  productSlice.actions;

export default productSlice;
