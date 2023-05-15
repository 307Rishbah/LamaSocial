import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction.js";

const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken,
  error: null,
  success: false, // for monitoring the registration process.
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //LogOut User

    logOut: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.userToken = null; // deletes token from storage
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    //Login User
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload.user;

      state.userToken = action.payload.token;
      state.success = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //Register User
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
