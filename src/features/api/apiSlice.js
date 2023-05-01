import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/",
  }),
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "quizzes",
    }),
    getDeadline: builder.query({
      query: () => "deadline",
    }),
  }),
});

export default apiSlice;
export const { useGetQuizzesQuery, useGetDeadlineQuery } = apiSlice;
