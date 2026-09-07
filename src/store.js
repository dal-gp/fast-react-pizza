import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

/**
 * Redux store - single source of truth for all global UI state.
 * Cart slice will be added here later.
 */
const store = configureStore({
  reducer: {
    user: userReducer, // state.user.username accessible via userSelector
  },
});

export default store;
