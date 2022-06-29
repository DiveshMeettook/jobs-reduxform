import React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import FirstDivPreview from "./FirstDivPreview";
import SecondDivPreview from "./SecondDivPreview";
import ThirdDivPreview from "./ThirdDivPreview";
function PreviewContent() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid item md={12}>
      <Item style={{ minHeight: "80vh" }} elevation="none">
        <div style={{ border: "1px solid #E0E0E0", minHeight: "10vh" }}>
          <FirstDivPreview />
        </div>
        <div
          style={{
            border: "1px solid #E0E0E0",
            borderTop: "none",
            minHeight: "40vh",
          }}
        >
          <SecondDivPreview />
        </div>
        <div
          style={{
            border: "1px solid #E0E0E0",
            borderTop: "none",
            minHeight: "25vh",
          }}
        >
          <ThirdDivPreview />
        </div>
      </Item>
    </Grid>
  );
}

export default PreviewContent;
