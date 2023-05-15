import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "https://lama-social.vercel.app/api/";

export const fetchAllPost = createAsyncThunk("posts/fetchAllPost", async () => {
  try {
    const res = await axios.get(`${base_url}posts/`);
    return res.data.sort((p1, p2) => {
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    });
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const fetchTimeline = createAsyncThunk(
  "posts/fetchTimeline",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${base_url}posts/timeline` + userId);
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

export const fetchUserProfile = createAsyncThunk(
  "posts/userProfile",
  async (username, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${base_url}/profile/` + username);
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

export const uploadPost = createAsyncThunk(
  "posts/upload post",
  async (post, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${base_url}/posts/`, post);
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

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, userId }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${base_url}posts/like/${postId}`, {
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

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async ({ postId, userId }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${base_url}posts/dislike/${postId}`, {
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
