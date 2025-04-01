import { createSlice } from "@reduxjs/toolkit";

const movieSlices = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,

    trailorVideo: null,
  },

  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },

    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addPopularMovie, addTrailorVideo } =
  movieSlices.actions;

export default movieSlices.reducer;
