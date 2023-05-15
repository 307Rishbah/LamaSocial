import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "https://lama-social.vercel.app/api/";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${base_url}users?userId=${userId}`);
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
      const res = await axios.put(`${base_url}users/${otherUserId}/follow`, {
        userId,
      });

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
      const res = await axios.put(`${base_url}users/${otherUserId}/unfollow`, {
        userId,
      });
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
      const res = await axios.get(`${base_url}users/friends/${userId}`);
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
