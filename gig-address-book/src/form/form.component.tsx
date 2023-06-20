import React, { useMemo, MouseEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import countries from "countries-list";
import { Input } from "../input/input.component";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { setOpenForm } from "../contacts/contactSlice";
import { useDispatch } from "react-redux";

export type Field = "first_name" | "last_name" | "email" | "country";

export interface FormValues {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
}

export interface FormProps {
  editMode: boolean;
  onSubmit: SubmitHandler<FormValues>;
  onDelete: (data: FormValues) => void;
  onEdit: (data: FormValues) => void;
}

export const FormComponent = (props: FormProps) => {
  const { onSubmit, editMode, onDelete, onEdit } = props;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      country: "",
    },
  });

  const validationPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const countryList = useMemo(() => {
    return Object.values(countries.countries).map((country) => country.name);
  }, []);

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    // onDelete(e.target);
    console.log(e.currentTarget);
  };

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    // onDelete(e.target);
    console.log(e.currentTarget);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container z-10 relative mx-auto p-4 w-3/6 bg-white rounded-lg shadow-sm"
      >
        <button
          onClick={() => dispatch(setOpenForm(false))}
          className="absolute right-3 top-2 hover:bg-slate-200 rounded-lg p-1"
        >
          <XMarkIcon className="h-6 w-6 text-sky-700" />
        </button>
        <div>
          <h1 className="text-xl text-sky-700 font-semibold mb-1">
            {editMode ? "Edit contact" : "Add contact"}
          </h1>
          <Input name={"first_name"} required={true} register={register} />
          {errors.first_name?.type === "required" && (
            <p className="text-red-700 mb-4">First name is required</p>
          )}
          <Input name={"last_name"} required={true} register={register} />
          {errors.last_name?.type === "required" && (
            <p className="text-red-700 mb-4">Last name is required</p>
          )}
          <Input
            name={"email"}
            required={true}
            register={register}
            pattern={validationPattern}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-700 mb-4">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-700 mb-4">Please enter valid email</p>
          )}
          <div className="flex flex-col my-4">
            <label
              className="text-sky-700 font-semibold mb-1"
              htmlFor={"country"}
            >
              Country
            </label>
            <select
              className="border-solid border-2 border-sky-100 rounded-lg px-2 py-1"
              {...register("country", { required: true })}
            >
              {countryList.map((country: string, index: number) => {
                return <option key={index}>{country}</option>;
              })}
            </select>
          </div>
        </div>

        {editMode ? (
          <div className="flex w-full justify-between">
            <button
              onClick={handleEdit}
              className="bg-sky-500 hover:bg-sky-700 rounded-lg cursor-pointer text-white hover:text-slate-100 px-4 py-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 rounded-lg cursor-pointer text-white hover:text-slate-100 px-4 py-2"
            >
              Delete
            </button>{" "}
          </div>
        ) : (
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 rounded-lg cursor-pointer text-white hover:text-slate-100 px-4 py-2"
          >
            Submit
          </button>
        )}
      </form>
      <div
        onClick={() => dispatch(setOpenForm(false))}
        className="absolute inset-y-0 opacity-50 w-full h-full bg-black z-0"
      ></div>
    </>
  );
};
