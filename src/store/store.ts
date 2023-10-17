import { configureStore } from "@reduxjs/toolkit";
import { api } from "./features/api/apiSlice";
import productSlice from "./features/product/productSlice";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userSlice";


const store = configureStore({
  reducer: {
    [ api.reducerPath ]: api.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
