import React from "react";
import LoginContainer from "./LoginContainer";
import RememberMe from "components/team-bt-components/RememberMe";
import TeamBtButton from "../team-bt-components/TeamBtButton";
import LoginEmailTextField from "./LoginEmailTextField";
import LoginPasswordTextField from "./LoginPasswordTextField";
const Login = props => {
  return (
    <LoginContainer>
      <LoginEmailTextField />
      <LoginPasswordTextField />
      <RememberMe onChange={() => {}} />
      <TeamBtButton variant="contained">LOGIN</TeamBtButton>
      <TeamBtButton variant="outlined">SIGN UP</TeamBtButton>
    </LoginContainer>
  );
};

export default Login;
