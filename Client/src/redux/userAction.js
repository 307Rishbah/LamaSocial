import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/users?userId=${userId}`
      );
      return res.data;
    } catch (error) {
      if (error.resposne && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const followUser = createAsyncThunk(
  "follow",
  async ({ userId, otherUserId }, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/users/${otherUserId}/follow`,
        { userId }
      );

      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "unfollow",
  async ({ userId, otherUserId }, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/users/${otherUserId}/unfollow`,
        { userId }
      );
      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchAllFriends = createAsyncThunk(
  "user/fetchFriends",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/users/friends/${userId}`
      );
      return res.data;
    } catch (error) {
      if (error.resposne && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// export const fetchProfile = createAsyncThunk(
//   "user/fetchProfile",
//   async (username, { rejectWithValue }) => {
//     try {
//       const res = axios.get(
//         `http://localhost:8080/api/users?username=${username}`
//       );
//       return res.data;
//     } catch (error) {
//       if (error.resposne && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
