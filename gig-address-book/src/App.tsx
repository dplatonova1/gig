import React from "react";
import { FormContainer } from "./form/form.container";
import { ListComponent } from "./list/list.component";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { setOpenForm } from "./contacts/contactSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const isOpen = useSelector((state: RootState) => state.contacts.isFormOpen);

  console.log(contacts);
  return (
    <div className="bg-slate-100 relative w-screen h-screen p-6 flex flex-col justify-center items-center">
      <div className="flex w-full justify-end">
        <h1 className="text-sky-700 m-auto font-bold text-5xl mb-8 mt-4">
          Your contact list
        </h1>
        {contacts.length > 0 && (
          <button
            onClick={() => dispatch(setOpenForm(true))}
            className="self-center bg-sky-500 hover:bg-sky-700 rounded-lg cursor-pointer text-white hover:text-slate-100 px-4 py-2"
          >
            Add contact
          </button>
        )}
      </div>
      {isOpen && <FormContainer editMode={false} />}
      <ListComponent contacts={contacts} />
    </div>
  );
}

export default App;
