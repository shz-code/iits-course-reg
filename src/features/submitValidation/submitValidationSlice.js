import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: true };

const submitValidationSlice = createSlice({
  name: "submitValidationSlice",
  initialState,
  reducers: {
    setValidation: (state, action) => {
      console.log(action);
      state.status = false;
    },
  },
});

export default submitValidationSlice.reducer;
export const { setValidation } = submitValidationSlice.actions;
