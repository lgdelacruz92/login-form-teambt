import React from "react";
import * as MUI from "@material-ui/core";

const TeamBtTextField = props => {
  const { label, type, className } = props;
  return (
    <MUI.TextField
      className={className}
      variant="outlined"
      label={label}
      type={type}
      fullWidth
    />
  );
};

export default TeamBtTextField;
