import React from "react";
import { Link } from "react-router-dom";

export interface ListCardComponentProps {
  name: string;
  last_name: string;
  email: string;
  country: string;
  id: string;
}

export const ListCardComponent = (props: ListCardComponentProps) => {
  const { name, last_name, email, country, id } = props;
  return (
    <Link to={`/gig/contacts/${id}`} className="px-4 py-1 flex justify-between">
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{last_name}</div>
      <div className="w-1/4">{email}</div>
      <div className="w-1/4 text-center">{country}</div>
    </Link>
  );
};
