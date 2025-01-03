import { createSlice } from "@reduxjs/toolkit";

const movieSlices = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
  },

  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovie } = movieSlices.actions;

export default movieSlices.reducer;
