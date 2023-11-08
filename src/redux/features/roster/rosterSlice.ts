import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  rosterData: null,
};

const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {
    setRosterData: (state, action: PayloadAction<any>) => {
      state.rosterData = action.payload;
    },
  },
});

export const { setRosterData } = rosterSlice.actions;
export default rosterSlice.reducer;
