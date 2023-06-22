import React from "react";
import { ListComponent } from "../list/list.component";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Link, Outlet } from "react-router-dom";

export const HomePageComponent = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="bg-slate-100 relative w-screen h-screen p-6 flex flex-col justify-center items-center">
      <div className="flex w-full justify-end">
        <h1 className="text-sky-700 m-auto font-bold text-5xl mb-8 mt-4">
          Your contact list
        </h1>
        {contacts.length > 0 && (
          <Link
            to="/modal"
            className="self-center bg-sky-500 hover:bg-sky-700 rounded-lg cursor-pointer text-white hover:text-slate-100 px-4 py-2"
          >
            Add contact
          </Link>
        )}
      </div>
      <Outlet />
      <ListComponent contacts={contacts} />
    </div>
  );
};
