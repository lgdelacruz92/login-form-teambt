import React from "react";
import LoginContainer from "./LoginContainer";
import MaskedTextField from "../team-bt-components/MaskedTextField";
import RememberMe from "components/team-bt-components/RememberMe";
import TeamBtButton from "../team-bt-components/TeamBtButton";
import LoginEmailTextField from "./LoginEmailTextField";
const Login = props => {
  return (
    <LoginContainer>
      <LoginEmailTextField />
      <MaskedTextField
        label="Password"
        onChange={e => console.log(e.target.value)}
        errorText=""
      />
      <RememberMe onChange={() => {}} />
      <TeamBtButton variant="contained">LOGIN</TeamBtButton>
      <TeamBtButton variant="outlined">SIGN UP</TeamBtButton>
    </LoginContainer>
  );
};

export default Login;
