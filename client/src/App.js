import React from "react";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;
