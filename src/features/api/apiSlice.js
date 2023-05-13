import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "quizzes",
    }),
    getDeadline: builder.query({
      query: () => "deadline",
    }),
    submitQuiz: builder.mutation({
      query: (quiz) => ({
        url: "submitQuiz",
        method: "POST",
        body: quiz,
      }),
    }),
    submitForm: builder.mutation({
      query: (formData) => ({
        url: "submitForm",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export default apiSlice;
export const {
  useGetQuizzesQuery,
  useGetDeadlineQuery,
  useSubmitQuizMutation,
  useSubmitFormMutation,
} = apiSlice;
