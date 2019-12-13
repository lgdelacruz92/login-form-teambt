import React from "react";
import MaskedTextField from "../team-bt-components/MaskedTextField";
import { validatePassword } from "@bit/lgdelacruz92.team-bt.validate-password";

const LoginPasswordTextField = props => {
  const [errorText, setErrorText] = React.useState("");
  return (
    <MaskedTextField
      label="Password"
      onChange={e => {
        if (validatePassword(e.target.value)) {
          setErrorText("");
        } else {
          setErrorText("Password must be greater than 4 characters");
        }
      }}
      errorText={errorText}
    />
  );
};

export default LoginPasswordTextField;