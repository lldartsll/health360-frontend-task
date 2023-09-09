import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productSlice from "./productSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
  },
});
