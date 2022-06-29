import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Header() {
  return (
    <Grid item xs={12}>
      <Item
        style={{
          textAlign: "start",
          backgroundColor: "#f6c200",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: "rgba(0, 0, 0, 0.8)",
            fontWeight: "bold",
            padding: "20px",
          }}
        >
          Créez et prévisualisez votre annonce
        </Typography>
      </Item>
    </Grid>
  );
}

export default Header;
