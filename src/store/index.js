import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./Auth";
import AddCarsReducer from "./AddNewCar";
import InnerReducer from "./Inner";

const reducers = combineReducers({
  auth: AuthReducer,
  cars: AddCarsReducer,
  inner: InnerReducer,
});

const store = configureStore({
  reducer: reducers,
});

export { store };
