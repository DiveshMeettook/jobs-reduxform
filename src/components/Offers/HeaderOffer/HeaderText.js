import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "./HeaderOffer.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HeaderText() {
  return (
    <Grid item xs={12}>
      <Item style={{ minHeight: "15vh" }} elevation="none">
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            textAlign: "start",
            marginBottom: "20px",
            color: "black",
          }}
          className="textHeaderText"
        >
          Le plus grand site d'emplois 100% spécialisé
        </Typography>
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            color: "orange",
            textAlign: "start",
          }}
          className="textHeaderText"
        >
          Google Cloud
        </Typography>
      </Item>
    </Grid>
  );
}

export default HeaderText;
