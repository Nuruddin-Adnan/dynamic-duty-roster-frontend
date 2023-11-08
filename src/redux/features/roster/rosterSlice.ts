import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  rosterData: [],
};

const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {
    setRosterData: (state, action: PayloadAction<[]>) => {
      state.rosterData = action.payload;
    },
  },
});

export const { setRosterData } = rosterSlice.actions;
export default rosterSlice.reducer;
