import React from "react";
import LoginContainer from "./LoginContainer";
import MaskedTextField from "../team-bt-components/MaskedTextField";
import TeamBtTextField from "../team-bt-components/TeamBtTextField";
import RememberMe from "components/team-bt-components/RememberMe";
import TeamBtButton from "../team-bt-components/TeamBtButton";

const Login = props => {
  return (
    <LoginContainer>
      <TeamBtTextField
        label="Email"
        onChange={e => console.log(e.target.value)}
      />
      <MaskedTextField
        label="Password"
        onChange={e => console.log(e.target.value)}
      />
      <RememberMe onChange={() => {}} />
      <TeamBtButton variant="contained">LOGIN</TeamBtButton>
      <TeamBtButton variant="outlined">SIGN UP</TeamBtButton>
    </LoginContainer>
  );
};

export default Login;
