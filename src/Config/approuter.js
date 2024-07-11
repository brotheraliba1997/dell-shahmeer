import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/home";
import Chat from "../Screens/chat";

function Approuter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default Approuter;
