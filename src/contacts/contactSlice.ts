import { createSlice } from "@reduxjs/toolkit";
import { FormValues } from "../form/form.component";

export interface ContactState {
  contacts: FormValues[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      let index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index > -1) {
        state.contacts.splice(index, 1);
      }
    },
    editContact: (state, action) => {
      let contactToPatch = state.contacts.find(
        (contact) => contact.id === action.payload.id
      );
      contactToPatch && Object.assign(contactToPatch, action.payload);
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;
