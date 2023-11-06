import { createSlice } from "@reduxjs/toolkit";

// set the initial path from the browser window object
const initialState = {
  pathName: "/",
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPathName: (state, action) => {
      state.pathName = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setPathName, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
