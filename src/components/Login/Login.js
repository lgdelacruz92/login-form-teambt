import React from "react";
import LoginContainer from "./LoginContainer";
import MaskedTextField from "../team-bt-components/MaskedTextField";
import TeamBtTextField from "../team-bt-components/TeamBtTextField";

const Login = props => {
  return (
    <LoginContainer>
      <TeamBtTextField label="Email" />
      <MaskedTextField label="Password" />
    </LoginContainer>
  );
};

export default Login;
