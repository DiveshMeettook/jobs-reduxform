import React from "react";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PreviewContent from "./PreviewContent";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Preview() {
  return (
    <Grid>
      <Grid item md={12} style={{ marginTop: "10px" }}>
        <Item elevation="none">
          <Typography
            style={{
              textAlign: "center",
              marginBottom: "10px",
              color: "black",
            }}
          >
            <b>Voici ce à quoi ressemblera votre annonce 👇</b>
            <p style={{ lineHeight: 2 }}>
              Ne vous inquiétez pas si tout n'est pas parfait du premier coup :
              elle peut être modifiée à tout moment après sa publication !
            </p>
          </Typography>
        </Item>
      </Grid>
      <PreviewContent />
    </Grid>
  );
}

export default Preview;
