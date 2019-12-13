import React from "react";
import LoginContainer from "./LoginContainer";
import RememberMe from "components/team-bt-components/RememberMe";
import TeamBtButton from "../team-bt-components/TeamBtButton";
import LoginEmailTextField from "./LoginEmailTextField";
import LoginPasswordTextField from "./LoginPasswordTextField";
const Login = props => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    rememberMe: false
  });

  return (
    <LoginContainer>
      <LoginEmailTextField />
      <LoginPasswordTextField />
      <RememberMe
        rememberMe={state.rememberMe}
        onChange={() => setState({ ...state, rememberMe: !state.rememberMe })}
      />
      <TeamBtButton variant="contained">LOGIN</TeamBtButton>
      <TeamBtButton variant="outlined">SIGN UP</TeamBtButton>
    </LoginContainer>
  );
};

export default Login;
