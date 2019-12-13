import React from "react";
import Login from "components/Login";

export default { title: "Login" };
export const login = () => (
  <Login
    onLogin={() => {}}
    onSignUp={() => {}}
    onRememberMe={rememberMe => console.log(rememberMe)}
  />
);
