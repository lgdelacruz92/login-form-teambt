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
  const { children, variant, onClick, color } = props;
  return (
    <MUI.Button
      color={color}
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
