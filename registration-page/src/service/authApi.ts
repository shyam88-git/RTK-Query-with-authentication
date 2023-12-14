import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:5000/api" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: "users/login",
        method: "post",
        body,
      }),
    }),

    registerUser: builder.mutation({
      query: (body: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      }) => ({
        url: "users/register",
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
