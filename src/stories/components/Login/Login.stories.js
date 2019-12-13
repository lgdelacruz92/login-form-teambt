import React from "react";
import Login from "components/Login";

export default { title: "Login" };
export const login = () => (
  <Login
    errorText="This is an error"
    onLogin={() => {}}
    onSignUp={() => {}}
    onRememberMe={rememberMe => console.log(rememberMe)}
  />
);
