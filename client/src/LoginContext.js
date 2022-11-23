import React, { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

function Wrapper({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setisLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

console.log("done");
export default Wrapper;
