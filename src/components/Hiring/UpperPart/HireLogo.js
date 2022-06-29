import React from "react";
import { Typography } from "@mui/material";
import { useHistory } from "react-router";

function HireLogo() {
  const history = useHistory();

  return (
    <>
      <Typography
        variant="h5"
        style={{
          textAlign: "start",
          borderBottom: "0.5PX solid #D8D8D8",
          paddingBottom: "20px",
          color: "#484848",
          fontFamily: "fantasy",
          marginTop: "20px",
          cursor: "pointer",
          marginLeft: "8px",
        }}
        onClick={() => history.push("/")}
      >
        AI Jobs in France
      </Typography>
    </>
  );
}

export default HireLogo;
