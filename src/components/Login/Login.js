import React from "react";
import LoginContainer from "./LoginContainer";
import TeamBtButton from "../team-bt-components/TeamBtButton";
import LoginEmailTextField from "./LoginEmailTextField";
import LoginPasswordTextField from "./LoginPasswordTextField";
import LoginButton from "./LoginButton";
import PropTypes from "prop-types";
import LoginErrorMessage from "./LoginErrorMessage";

const Login = props => {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const { onLogin, onSignUp, errorText } = props;

  return (
    <LoginContainer>
      <LoginErrorMessage message={errorText} />
      <LoginEmailTextField
        datatestid={"email-input-field"}
        onChange={newEmail => setState({ ...state, email: newEmail })}
      />
      <LoginPasswordTextField
        datatestid={"password-input-field"}
        onChange={newPassword => {
          setState({ ...state, password: newPassword });
        }}
      />
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
