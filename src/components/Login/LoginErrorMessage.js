import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    styleName: {
      color: "red"
    }
  };
});

const LoginErrorMessage = props => {
  const classes = useStyles();
  const { message } = props;
  return (
    <MUI.Typography align="center" className={classes.styleName}>
      {message}
    </MUI.Typography>
  );
};

export default LoginErrorMessage;
