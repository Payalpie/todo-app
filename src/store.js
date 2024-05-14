// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/todos";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
