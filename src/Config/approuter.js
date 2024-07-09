import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/home";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
        <Route path="/" element={<Home />}>
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
