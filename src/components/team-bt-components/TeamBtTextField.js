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
  const { label, type, InputProps, onChange, errorText } = props;
  const classes = useStyles();
  return (
    <MUI.TextField
      type={type}
      label={label}
      error={errorText.length > 0}
      helperText={errorText}
      InputProps={InputProps}
      variant="outlined"
      className={classes.teamBtTextField}
      fullWidth
      onChange={onChange}
    />
  );
};

export default TeamBtTextField;
