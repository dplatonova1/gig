import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FormValues } from "../form/form.component";

export interface ContactState {
  contacts: FormValues[];
  isFormOpen: boolean;
}

const initialState: ContactState = {
  contacts: [],
  isFormOpen: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log(action.payload);
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log(action.payload);
      state.contacts.filter((el) => el.id === action.payload.id);
    },
    editContact: (state, action) => {
      console.log(action.payload);
      let itemtopatch = state.contacts.findIndex(
        (el) => el.id === action.payload.id
      );
      state.contacts
        .slice(0, itemtopatch)
        .concat(action.payload)
        .concat(state.contacts.slice(itemtopatch + 1));
    },
    setOpenForm: (state, action) => {
      state.isFormOpen = action.payload;
    },
  },
});

export const { addContact, deleteContact, editContact, setOpenForm } =
  contactsSlice.actions;

export default contactsSlice.reducer;
