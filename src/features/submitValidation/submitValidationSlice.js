import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: true, finished: false };

const submitValidationSlice = createSlice({
  name: "submitValidationSlice",
  initialState,
  reducers: {
    setValidation: (state) => {
      state.status = false;
    },
    setFinished: (state) => {
      state.finished = true;
    },
  },
});

export default submitValidationSlice.reducer;
export const { setValidation, setFinished } = submitValidationSlice.actions;
