import items from "../assets/contacts.json"; //початкові контакти

import { createSlice } from "@reduxjs/toolkit";

//початковий стан контакти
const initialState = {
  items,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload); //пишемо за допомогою imer
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

//actions
export const { addContact, deleteContact } = slice.actions;

//useSelector
//state - загальний(store), contact - назва слайсу, items- занчення в initialState
export const selectContacts = (state) => state.contact.items;

//експортуємо slice (reducer)
export const contactReducer = slice.reducer; //використовуємо в //обгортка persist
