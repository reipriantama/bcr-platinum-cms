import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Auth";
import AddCarsReducer from "./AddNewCar";

const reducers = combineReducers({
  auth: AuthReducer,
  cars: AddCarsReducer,
});

const store = configureStore({
  reducer: reducers,
});

export { store };
