import React from "react";
import LoginContainer from "./LoginContainer";
import RememberMe from "components/team-bt-components/RememberMe";
import TeamBtButton from "../team-bt-components/TeamBtButton";
import LoginEmailTextField from "./LoginEmailTextField";
import LoginPasswordTextField from "./LoginPasswordTextField";
import PropTypes from "prop-types";

const Login = props => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const { onLogin, onSignUp } = props;

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
      <RememberMe
        rememberMe={state.rememberMe}
        onChange={() => setState({ ...state, rememberMe: !state.rememberMe })}
      />
      <TeamBtButton onClick={() => onLogin(state)} variant="contained">
        LOGIN
      </TeamBtButton>
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
