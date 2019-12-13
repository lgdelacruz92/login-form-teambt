import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    loginView: {
      width: 350
    }
  };
});

const LoginView = props => {
  const classes = useStyles();
  const { children } = props;
  return (
    <MUI.Paper elevation={3} className={classes.loginView}>
      {children}
    </MUI.Paper>
  );
};

export default LoginView;
