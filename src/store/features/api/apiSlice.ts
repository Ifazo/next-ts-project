import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// const token = localStorage.getItem("token");

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
    }),
    signIn: builder.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
} = api;
