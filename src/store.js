import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

/**
 * Redux store - single source of truth for all global UI state.
 */
const store = configureStore({
  reducer: {
    user: userReducer, // state.user.username accessible via userSelector
    cart: cartReducer, // state.cart.cart accessible via useSelector
  },
});

export default store;
