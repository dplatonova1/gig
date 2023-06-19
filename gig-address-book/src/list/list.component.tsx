import React from "react";
import { ListCardComponent } from "./list-card/list-card.component";

const data = [
  {
    first_name: "Daria",
    last_name: "Platonova",
    email: "lala@gmailc.om",
    country: "Russia",
  },

  {
    first_name: "Dargia",
    last_name: "Platognova",
    email: "lala@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Plgatognova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },

  {
    first_name: "Dgargia",
    last_name: "Platonova",
    email: "lagla@gmagilc.om",
    country: "Serbia",
  },
];

export const ListComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm w-full h-4/5 m-4 overflow-hidden">
      <div className="px-4 py-1 flex justify-between bg-slate-200 ">
        <div className="w-1/4 text-sky-700 font-semibold mb-1">First name</div>
        <div className="w-1/4 text-sky-700 font-semibold mb-1">Last name</div>
        <div className="w-1/4 text-sky-700 font-semibold mb-1">Email</div>
        <div className="w-1/4 text-sky-700 font-semibold mb-1 text-center">
          Country
        </div>
      </div>
      <div className="flex flex-col divide-y divide-dotted h-full overflow-y-auto">
        {data.map((contact, index) => {
          return (
            <ListCardComponent
              key={index}
              name={contact.first_name}
              last_name={contact.last_name}
              email={contact.email}
              country={contact.country}
            />
          );
        })}
      </div>
    </div>
  );
};
