import React from "react";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import { Route, Routes } from "react-router-dom";
import ChatSection from "./pages/ChatSection";
import CommSkillsSection from "./components/community/CommSkillsSection";
import Wrapper from "./LoginContext";

function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/community" element={<CommSkillsSection />} />
      </Routes>
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
