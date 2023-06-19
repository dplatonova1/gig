import React from "react";

export interface ListCardComponentProps {
  name: string;
  last_name: string;
  email: string;
  country: string;
}

export const ListCardComponent = (props: ListCardComponentProps) => {
  const { name, last_name, email, country } = props;
  return (
    <div className="px-4 py-1 flex justify-between">
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{last_name}</div>
      <div className="w-1/4">{email}</div>
      <div className="w-1/4 text-center"> {country}</div>
    </div>
  );
};
