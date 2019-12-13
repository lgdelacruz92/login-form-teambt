import React from "react";
import TeamBtTextField from "../team-bt-components/TeamBtTextField";
import { validateEmail } from "@bit/lgdelacruz92.team-bt.validate-email";

const LoginEmailTextField = props => {
  const [errorText, setErrorText] = React.useState("");
  return (
    <TeamBtTextField
      label="Email"
      onChange={e => {
        if (validateEmail(e.target.value)) {
          setErrorText("");
        } else {
          setErrorText("Invalid email");
        }
      }}
      errorText={errorText}
    />
  );
};

export default LoginEmailTextField;
