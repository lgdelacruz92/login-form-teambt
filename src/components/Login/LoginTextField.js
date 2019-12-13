import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    loginTextField: {}
  };
});

const LoginTextField = props => {
  const classes = useStyles();
  const { label, type } = props;
  return (
    <MUI.TextField
      variant="outlined"
      label={label}
      type={type}
      fullWidth
      className={classes.loginTextField}
    />
  );
};

export default LoginTextField;
