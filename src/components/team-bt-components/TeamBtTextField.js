import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    teamBtTextField: {
      marginTop: "0.8em"
    }
  };
});

const TeamBtTextField = props => {
  const { label, type, InputProps } = props;
  const classes = useStyles();
  return (
    <MUI.TextField
      type={type}
      label={label}
      InputProps={InputProps}
      variant="outlined"
      className={classes.teamBtTextField}
      fullWidth
    />
  );
};

export default TeamBtTextField;
