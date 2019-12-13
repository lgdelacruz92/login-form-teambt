import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    rememberMe: {
      display: "flex",
      alignItems: "center"
    }
  };
});

const RememberMe = props => {
  const { onChange } = props;
  const classes = useStyles();
  return (
    <div className={classes.rememberMe}>
      <MUI.Checkbox onChange={onChange} />
      <MUI.Typography>Remember me</MUI.Typography>
    </div>
  );
};

export default RememberMe;
