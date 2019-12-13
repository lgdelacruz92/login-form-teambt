import React from "react";
import EyeAdornment from "./EyeAdornment";
import TeamBtTextField from "../TeamBtTextField";

const MaskedTextField = props => {
  const [visible, setVisible] = React.useState(false);
  const { label, onChange, errorText, datatestid } = props;
  return (
    <TeamBtTextField
      type={visible ? "text" : "password"}
      label={label}
      errorText={errorText}
      InputProps={{
        endAdornment: (
          <EyeAdornment
            visible={visible}
            onClick={() => setVisible(!visible)}
          />
        )
      }}
      datatestid={datatestid}
      onChange={onChange}
    />
  );
};

export default MaskedTextField;
