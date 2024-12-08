import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice"; //reducer contact
import { filterReducer } from "./filtersSlice"; //reducer filter

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
