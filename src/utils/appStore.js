import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
