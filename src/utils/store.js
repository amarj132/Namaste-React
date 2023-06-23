import { configureStore } from "@reduxjs/toolkit";
import cartSlicce from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlicce,
  },
});

export default store;
