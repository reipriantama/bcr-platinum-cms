import { createSlice } from "@reduxjs/toolkit";

const innerSlice = createSlice({
  name: "inner",
  initialState: {
    innerSuccess: false,
  },
  reducers: {
    setInnerSuccess: (state, action) => {
      state.inner = action.payload;
    },
  },
});

export const { setInnerSuccess } = innerSlice.actions;

export default innerSlice.reducer;
