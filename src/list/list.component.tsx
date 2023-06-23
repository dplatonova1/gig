import React from "react";
import { ListCardComponent } from "./list-card/list-card.component";
import { FormValues } from "../form/form.component";
import { Link } from "react-router-dom";

interface ListComponentProps {
  contacts: FormValues[];
}
export const ListComponent = (props: ListComponentProps) => {
  const { contacts } = props;

  return contacts.length ? (
    <div className="bg-white rounded-lg shadow-sm w-full h-min m-4 overflow-hidden">
      <div className="px-4 py-1 flex justify-between bg-slate-200 ">
        <div className="w-1/4 text-sky-700 font-semibold mb-1">First name</div>
        <div className="w-1/4 text-sky-700 font-semibold mb-1">Last name</div>
        <div className="w-1/4 text-sky-700 font-semibold mb-1">Email</div>
        <div className="w-1/4 text-sky-700 font-semibold mb-1 text-center">
          Country
        </div>
      </div>
      <div className="flex flex-col divide-y divide-dotted h-full overflow-y-auto">
        {contacts.map((contact, index) => {
          return (
            <ListCardComponent
              key={index}
              id={contact.id}
              name={contact.first_name}
              last_name={contact.last_name}
              email={contact.email}
              country={contact.country}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="w-3/5 flex flex-col justify-center items-center">
      <div className="text-center mb-4">
        Oops, there are no contacts in your list yet! &#128522;<br></br> You can
        add your first contact in our form here:
      </div>
      <Link
        to="/gig/modal"
        className="self-center bg-sky-500 hover:bg-sky-700 rounded-lg cursor-pointer text-white hover:text-slate-100 px-4 py-2"
      >
        Add contact
      </Link>
    </div>
  );
};
