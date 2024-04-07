import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice/Slice";
import CartSlice from "./Slice/CartSlice";

const store = configureStore({
  reducer: {
    data: Slice,
    cart: CartSlice,
  },
});

export default store;
