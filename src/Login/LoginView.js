import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    loginView: {}
  };
});

const LoginView = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.loginView}>{children}</div>;
};

export default LoginView;
