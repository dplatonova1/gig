import React from "react";
import { FormContainer } from "./form/form.container";
import { Route, Routes } from "react-router-dom";
import { HomePageComponent } from "./home-page/home-page.component";
import { ErrorPageComponent } from "./error-page/error-page.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/gig" element={<HomePageComponent />}>
          <Route
            path="/gig/contacts/:contactId"
            element={<FormContainer editMode={true} />}
          />
          <Route
            path="/gig/modal"
            element={<FormContainer editMode={false} />}
          />
        </Route>
        <Route path="/404" element={<ErrorPageComponent />} />
        <Route path="*" element={<ErrorPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
