import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from './operations'


const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null
};
function handlePending(state) {
  state.isLoading = true;
};
function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => handlePending(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => handleRejected(state, action))
      .addCase(addContact.pending, state => handlePending(state))
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => handleRejected(state, action))
      .addCase(deleteContact.pending, state => handlePending(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => handleRejected(state, action))
});

export const contactReducer = contactSlice.reducer

// // Selectors
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;


