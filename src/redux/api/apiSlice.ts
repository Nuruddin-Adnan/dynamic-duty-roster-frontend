import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dynamic-duty-roster-backend.vercel.app/api/v1",
    prepareHeaders: (headers) => {
      // Get the access token from sessionStorage
      const accessToken = sessionStorage.getItem("accessToken");
      if (accessToken) {
        headers.set("Authorization", accessToken);
      }
      return headers;
    },
  }),
  tagTypes: ["yourtags"],
  endpoints: () => ({}),
});
