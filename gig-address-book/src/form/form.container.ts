import React, { createElement, useState, useMemo } from "react";
import { FormComponent, FormValues } from "./form.component";
import { SubmitHandler } from "react-hook-form";

export const FormContainer = () => {
  const [contacts, setContacts] = useState<FormValues[]>([]);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const listOfContacts = contacts.concat(data);
    setContacts(listOfContacts);
  };

  const onDelete = (data: FormValues) => {
    console.log(data);
    // const listOfContacts = contacts.find({data});
    // setContacts(listOfContacts);
  };
  return createElement(FormComponent, { onSubmit, onDelete, editMode: true });
};
