import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./redux/authSlice";
import { postSlice } from "./redux/postSlice";
import { userSlice } from "./redux/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer,
  },
});
