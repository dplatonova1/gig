import { createSlice } from "@reduxjs/toolkit";
import { FormValues } from "../form/form.component";
import { redirect } from "react-router-dom";

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
      state.contacts.filter((el) => el.id === action.payload.id);
    },
    editContact: (state, action) => {
      let itemtopatch = state.contacts.findIndex(
        (el) => el.id === action.payload.id
      );
      state.contacts
        .slice(0, itemtopatch)
        .concat(action.payload)
        .concat(state.contacts.slice(itemtopatch + 1));
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;
