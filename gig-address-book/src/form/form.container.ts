import React, { createElement } from "react";
import { FormComponent } from "./form.component";

export const FormContainer = () => {
  const onSubmit = () => {
    console.log("values");
  };
  return createElement(FormComponent, { editMode: true });
};
