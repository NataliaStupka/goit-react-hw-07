//selectors (useSelector) - використання на компоненті
//state - загальний(store), contact - назва слайсу, items/filter- занчення в initialState

import { createSelector } from "@reduxjs/toolkit";

//contactSlice
export const selectContacts = (state) => state.contacts.items; //контакти
export const selectIsError = (state) => state.contacts.isError;
export const selectIsLoading = (state) => state.contacts.isLoading;

//filterSlice
export const selectSearchFilter = (state) => state.filter.searchContact; //пошук

//складений селектор, пошук/фільтрація контактів
export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectSearchFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
//selectFilteredContacts - передамо в ContactList для рендера контактів
//замість selectContacts
