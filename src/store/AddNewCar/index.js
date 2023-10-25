// src/redux/carsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    addCarSuccess: false,
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setAddCarSuccess: (state, action) => {
      state.addCarSuccess = action.payload;
    },
  },
});

export const { setCars, setAddCarSuccess } = carsSlice.actions;

export default carsSlice.reducer;


