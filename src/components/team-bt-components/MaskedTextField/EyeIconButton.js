import React from "react";
import * as MUI from "@material-ui/core";
import * as MUIIcons from "@material-ui/icons";

const EyeIconButton = props => {
  const { visible, onClick } = props;
  return (
    <MUI.IconButton
      edge="end"
      onClick={onClick}
      onMouseDown={e => e.preventDefault()}
    >
      {visible ? <MUIIcons.Visibility /> : <MUIIcons.VisibilityOff />}
    </MUI.IconButton>
  );
};

export default EyeIconButton;
