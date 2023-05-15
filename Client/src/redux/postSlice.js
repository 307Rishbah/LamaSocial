import { createSlice } from "@reduxjs/toolkit";
import { dislikePost, fetchAllPost, likePost, uploadPost } from "./postAction";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch All Posts

    builder.addCase(fetchAllPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchAllPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // upload post

    builder.addCase(uploadPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts.unshift(action.payload);
    });
    builder.addCase(uploadPost, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //like post

    builder.addCase(likePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload;
        }
        return post;
      });
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //dislike Post

    builder.addCase(dislikePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload;
        }
        return post;
      });
    });

    builder.addCase(dislikePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

//fetch Timeline

// builder.addCase(fetchTimeline.fulfilled, (state, action) => {
//   state.isLoading = false;
//   state.posts = action.payload;
// });
// builder.addCase(fetchTimeline.rejected, (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// });
