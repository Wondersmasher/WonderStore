import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./utilities/CartSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
export default store;
