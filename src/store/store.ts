import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/Cart";
import userSlice from "./features/user/User";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

const userPersistConfig = {
  key: "user",
  version: 1,
  storage: storageSession,
};

const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage: storageSession,
};

const reducers = combineReducers({
  user: persistReducer(userPersistConfig, userSlice.reducer),
  cart: persistReducer(cartPersistConfig, cartSlice.reducer),
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
