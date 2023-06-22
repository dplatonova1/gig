import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
} from "./contacts/contactSlice";
import { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addContact, deleteContact, editContact),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "contacts",
      JSON.stringify((listenerApi.getState() as RootState).contacts)
    ),
});
