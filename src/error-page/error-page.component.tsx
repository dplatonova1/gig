import React from "react";

export const ErrorPageComponent = () => {
  return (
    <div
      id="error-page"
      className="bg-slate-100 relative w-screen h-screen p-6 flex flex-col justify-center items-center"
    >
      <h1 className="text-sky-700 m-auto font-bold text-5xl mb-8 mt-4">
        Oops!
      </h1>
      <p>Page not found &#128533;</p>
    </div>
  );
};
