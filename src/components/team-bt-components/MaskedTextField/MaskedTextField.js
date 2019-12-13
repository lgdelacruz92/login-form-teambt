import React from "react";
import * as MUI from "@material-ui/core";
import EyeAdornment from "./EyeAdornment";

const MaskedTextField = props => {
  const [visible, setVisible] = React.useState(false);
  return (
    <MUI.TextField
      type={visible ? "text" : "password"}
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
