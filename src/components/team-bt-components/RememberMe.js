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
  const [checked, setChecked] = React.useState(false);
  const classes = useStyles();
  React.useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);
  return (
    <div className={classes.rememberMe}>
      <MUI.Checkbox
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <MUI.Typography>Remember me</MUI.Typography>
    </div>
  );
};

export default RememberMe;
