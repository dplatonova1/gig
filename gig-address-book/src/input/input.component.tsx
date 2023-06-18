import React from "react";
import { UseFormRegister, Validate } from "react-hook-form";
import { Field, FormValues } from "../form/form.component";

interface LabelProps {
  name: Field;
  register: UseFormRegister<FormValues>;
  required: boolean;
  pattern?: RegExp;
}

export const Input = (props: LabelProps) => {
  const { name, register, required, pattern } = props;
  return (
    <div className="flex flex-col mt-4">
      <label className="text-sky-700 font-semibold mb-1" htmlFor={name}>
        {name.slice(0, 1).toUpperCase().concat(name.slice(1)).replace("_", " ")}
      </label>
      <input
        type="text"
        className="border-solid border-2 border-sky-100 rounded-lg px-2 py-1"
        {...register(name, { required, pattern })}
      />
    </div>
  );
};
