import React from "react";
import TeamBtButton from "../team-bt-components/TeamBtButton";

const LoginButton = props => {
  const { onClick } = props;

  React.useEffect(() => {
    const onKeyDown = e => {
      if (e.key === "Enter") {
        onClick();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClick]);

  return (
    <TeamBtButton color="primary" onClick={onClick} variant="contained">
      LOGIN
    </TeamBtButton>
  );
};

export default LoginButton;
