import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPageComponent = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    } else if (error.status === 404) {
      // ...
    }

    return (
      <div
        id="error-page"
        className="bg-slate-100 relative w-screen h-screen p-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-sky-700 m-auto font-bold text-5xl mb-8 mt-4">
          Oops! {error.status}
        </h1>
        <p>{error.statusText} &#128533;</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};
