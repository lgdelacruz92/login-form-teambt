import React from "react";
import * as MUI from "@material-ui/core";
import EyeAdornment from "./EyeAdornment";

const MaskedTextField = props => {
  const [visible, setVisible] = React.useState(false);
  const { label } = props;
  return (
    <MUI.TextField
      type={visible ? "text" : "password"}
      variant="outlined"
      label={label}
      fullWidth
      InputProps={{
        endAdornment: (
          <EyeAdornment
            visible={visible}
            onClick={() => setVisible(!visible)}
          />
        )
      }}
    />
  );
};

export default MaskedTextField;
