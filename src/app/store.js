import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import submitValidationReducer from "../features/submitValidation/submitValidationSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    submitValidation: submitValidationReducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
