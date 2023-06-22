import React from "react";
import { FormContainer } from "./form/form.container";
import { Route, Routes } from "react-router-dom";
import { HomePageComponent } from "./home-page/home-page.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePageComponent />}>
          <Route
            path="/contacts/:contactId"
            element={<FormContainer editMode={true} />}
          />
          <Route path="/modal" element={<FormContainer editMode={false} />} />
          <Route path="*" element={<ErrorPageComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
