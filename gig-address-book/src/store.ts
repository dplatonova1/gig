import { AnyAction, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux";
import { listenerMiddleware } from "./middleware";
import slice from "./contacts/contactSlice";

const contactsState = JSON.parse(localStorage.getItem("contacts") || "null");

const store = configureStore({
  preloadedState: {
    contacts: contactsState === null ? { contacts: [] } : contactsState,
  },
  reducer: {
    contacts: slice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    listenerMiddleware.middleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Action = AnyAction;

export const useDispatch: () => AppDispatch = _useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
export default store;
