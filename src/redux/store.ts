import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import rosterSlice from "./features/roster/rosterSlice";

const store = configureStore({
  reducer: {
    roster: rosterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
