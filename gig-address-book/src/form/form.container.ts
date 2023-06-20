import React, { createElement, useState, useMemo, useCallback } from "react";
import { FormComponent, FormValues } from "./form.component";
import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  editContact,
  setOpenForm,
} from "../contacts/contactSlice";
import { v4 as uuidv4 } from "uuid";

interface FormContainerProps {
  editMode: boolean;
}

export const FormContainer = (props: FormContainerProps) => {
  const { editMode } = props;
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = useCallback((data) => {
    dispatch(addContact({ ...data, id: uuidv4() }));
    dispatch(setOpenForm(false));
  }, []);

  const onDelete = (data: FormValues) => {
    dispatch(deleteContact(data));
    dispatch(setOpenForm(false));
  };

  const onEdit = (data: FormValues) => {
    dispatch(editContact(data));
    dispatch(setOpenForm(false));
  };

  return createElement(FormComponent, {
    onSubmit,
    onDelete,
    onEdit,
    editMode,
  });
};
