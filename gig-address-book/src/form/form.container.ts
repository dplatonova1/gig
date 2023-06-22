import React, { createElement, useState, useMemo, useCallback } from "react";
import { FormComponent, FormValues } from "./form.component";
import { SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  editContact,
} from "../contacts/contactSlice";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";
import { useNavigate, useParams } from "react-router-dom";
import countries from "countries-list";

interface FormContainerProps {
  editMode: boolean;
}

export const FormContainer = (props: FormContainerProps) => {
  const { editMode } = props;
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((item) => item.id === params.contactId)
  );

  const countryList = useMemo(() => {
    return Object.values(countries.countries).map((country) => country.name);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = useCallback((data) => {
    dispatch(addContact({ ...data, id: uuidv4() }));
    navigate(-1);
  }, []);

  const onDelete = useCallback((data: FormValues) => {
    dispatch(deleteContact(data));
    navigate(-1);
  }, []);

  const onEdit = useCallback((data: FormValues) => {
    dispatch(editContact(data));
    navigate(-1);
  }, []);

  const onClose = useCallback(() => {
    navigate(-1);
  }, []);

  return createElement(FormComponent, {
    onSubmit,
    onDelete,
    onEdit,
    editMode,
    contact,
    onClose,
    countryList,
  });
};
