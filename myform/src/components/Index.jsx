import React from "react";
import Education from "./Education";
import Employment from "./Employment";
import Navber from "./Navber";
import Personal from "./Personal";
import AllInfo from "./AllInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Index() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/education" element={<Education />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/allInfo" element={<AllInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
