import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    addCarSuccess: false,
    editCarSuccess: false,
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },
    setAddCarSuccess: (state, action) => {
      state.addCarSuccess = action.payload;
    },
    setEditCarSuccess: (state, action) => {
      state.editCarSuccess = action.payload;
    },
  },
});

export const { setCars, setAddCarSuccess, setEditCarSuccess } =
  carsSlice.actions;

export default carsSlice.reducer;
