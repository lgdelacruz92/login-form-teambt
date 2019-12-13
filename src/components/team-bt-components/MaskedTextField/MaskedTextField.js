import React from "react";
import EyeAdornment from "./EyeAdornment";
import TeamBtTextField from "../TeamBtTextField";

const MaskedTextField = props => {
  const [visible, setVisible] = React.useState(false);
  const { label, onChange } = props;
  return (
    <TeamBtTextField
      type={visible ? "text" : "password"}
      label={label}
      InputProps={{
        endAdornment: (
          <EyeAdornment
            visible={visible}
            onClick={() => setVisible(!visible)}
          />
        )
      }}
      onChange={onChange}
    />
  );
};

export default MaskedTextField;
