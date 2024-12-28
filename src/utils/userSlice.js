import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uid: null,
    displatName: null,
    email: null,
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload; // Set the user data
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser, setUser } = userSlice.actions;
export default userSlice.reducer;
