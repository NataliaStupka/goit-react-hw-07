import { createSlice } from "@reduxjs/toolkit";

//початковий стан
const initialState = {
  searchContact: "", // що шукаємо
};

//створюємо слайс
const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    //actions
    changeFilter: (state, action) => {
      state.searchContact = action.payload;
    },
  },
});

//action
export const { changeFilter } = slice.actions;

////useSelector
//state - загальний(store), contact - назва слайсу, filter - занчення в initialState
export const selectSearchFilter = (state) => {
  return state.filter.searchContact;
};

//експортуємо slice (reducer)
export const filterReducer = slice.reducer; //використовуємо в //обгортка persist
