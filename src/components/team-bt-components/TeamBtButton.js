import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    teamBtButton: {
      marginTop: "0.5em"
    }
  };
});

const TeamBtButton = props => {
  const classes = useStyles();
  const { children, variant, onClick } = props;
  return (
    <MUI.Button
      onClick={onClick}
      fullWidth
      variant={variant}
      className={classes.teamBtButton}
    >
      {children}
    </MUI.Button>
  );
};

export default TeamBtButton;
