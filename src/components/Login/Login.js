import React from "react";
import LoginContainer from "./LoginContainer";
import RememberMe from "components/team-bt-components/RememberMe";
import TeamBtButton from "../team-bt-components/TeamBtButton";
import LoginEmailTextField from "./LoginEmailTextField";
import LoginPasswordTextField from "./LoginPasswordTextField";
import LoginButton from "./LoginButton";
import PropTypes from "prop-types";

const Login = props => {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const { onLogin, onSignUp, onRememberMe } = props;

  return (
    <LoginContainer>
      <LoginEmailTextField
        onChange={newEmail => setState({ ...state, email: newEmail })}
      />
      <LoginPasswordTextField
        onChange={newPassword => {
          setState({ ...state, password: newPassword });
        }}
      />
      <RememberMe onChange={onRememberMe} />
      <LoginButton
        onClick={() => {
          onLogin(state);
        }}
      />
      <TeamBtButton onClick={onSignUp} variant="outlined">
        SIGN UP
      </TeamBtButton>
    </LoginContainer>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
};

export default Login;
