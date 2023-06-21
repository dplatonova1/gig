import React, { createElement, useState, useMemo, useCallback } from "react";
import { FormComponent, FormValues } from "./form.component";
import { SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  editContact,
  setOpenForm,
} from "../contacts/contactSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import { redirect, useParams } from "react-router-dom";

interface FormContainerProps {
  editMode: boolean;
}

export const FormContainer = (props: FormContainerProps) => {
  const { editMode } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((item) => item.id === params.contactId)
  );

  const onSubmit: SubmitHandler<FormValues> = useCallback((data) => {
    dispatch(addContact({ ...data, id: uuidv4() }));
    dispatch(setOpenForm(false));
  }, []);

  const onDelete = useCallback((data: FormValues) => {
    console.log("la");
    dispatch(deleteContact(data));
    dispatch(setOpenForm(false));
    return redirect("/");
  }, []);

  const onEdit = useCallback((data: FormValues) => {
    dispatch(editContact(data));
    dispatch(setOpenForm(false));
    return redirect("/");
  }, []);

  return createElement(FormComponent, {
    onSubmit,
    onDelete,
    onEdit,
    editMode,
    contact,
  });
};
