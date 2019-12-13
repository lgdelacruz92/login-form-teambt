import React from "react";
import LoginContainer from "./LoginContainer";
import MaskedTextField from "../team-bt-components/MaskedTextField";
import TeamBtTextField from "../team-bt-components/TeamBtTextField";

const Login = props => {
  return (
    <LoginContainer>
      <TeamBtTextField />
      <MaskedTextField label="Password" />
    </LoginContainer>
  );
};

export default Login;
