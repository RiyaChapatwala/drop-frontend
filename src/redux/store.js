import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducers,
  },
});
