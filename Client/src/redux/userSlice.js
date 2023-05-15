import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllFriends,
  fetchUser,
  followUser,
  unfollowUser,
} from "./userAction";

const initialState = {
  loading: false,
  users: [],
  friends: [],

  error: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetch user
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.users.findIndex(
        (user) => user._id === action.payload._id
      );
      if (index === -1) {
        state.users.push(action.payload);
      }
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //follow user

    builder.addCase(followUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(followUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((user) => {
        if (user._id === action.payload.followUser._id) {
          user = action.payload.followUser;
        }
        if (user._id === action.payload.userInfo._id) {
          user = action.payload.userInfo;
        }
        return user;
      });
    });
    builder.addCase(followUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //unfollow user

    builder.addCase(unfollowUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(unfollowUser.fulfilled, (state, action) => {
      state.loading = false;

      state.users = state.users.map((user) => {
        if (user._id === action.payload.followUser._id) {
          user = action.payload.followUser;
        }
        if (user._id === action.payload.userInfo._id) {
          user = action.payload.userInfo;
        }
        return user;
      });
    });
    builder.addCase(unfollowUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //fetch All Friends

    builder.addCase(fetchAllFriends.pending, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchAllFriends.fulfilled, (state, action) => {
      state.loading = false;
      state.friends = action.payload;
    });
    builder.addCase(fetchAllFriends.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
