import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frontend from './Frontend'
import Authentication from './Authentication'

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Frontend/>} />
          <Route path="/authentication/*" element={<Authentication/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
