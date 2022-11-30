import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const user = {
  user: {
    personal_detail: {
      location: {
        address: "",
        city: "",
        state: "",
      },
      name: "",
      phone: "",
      dob: "",
      email: "",
      password: "",
    },
    _id: "",
    is_public: true,
    friends: [],
    joined_community: [],
    __v: 2,
  },
  token: "",
};

function Wrapper({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(user);
  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setisLoggedIn, loggedInUser, setLoggedInUser }}>
      {children}
    </LoginContext.Provider>
  );
}

// console.log("done");
export default Wrapper;
