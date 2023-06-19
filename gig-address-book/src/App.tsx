import React from "react";
import { FormContainer } from "./form/form.container";
import { ListComponent } from "./list/list.component";

function App() {
  return (
    <div className="bg-slate-100 w-screen h-screen p-6 flex flex-col justify-center items-center">
      <h1 className="text-sky-700 font-bold text-5xl text-center mb-8 mt-4">
        Your contact list
      </h1>
      {/* <FormContainer /> */}

      <ListComponent />
    </div>
  );
}

export default App;
