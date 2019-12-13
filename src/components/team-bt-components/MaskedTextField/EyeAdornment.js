import React from "react";
import * as MUI from "@material-ui/core";
import EyeIconButton from "./EyeIconButton";

const EyeAdornment = props => {
  return (
    <MUI.InputAdornment position="end">
      <EyeIconButton {...props} />
    </MUI.InputAdornment>
  );
};

export default EyeAdornment;
