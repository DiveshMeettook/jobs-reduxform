import React from "react";
import Header from "./Header";
import Form from "./input/Form";
import Preview from "./preview/Preview";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HireFormPage() {
  return (
    <Grid style={{ position: "relative" }}>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <Form />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item elevation="none" style={{ position: "sticky", top: "10px" }}>
            <Preview />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item
            style={{
              textAlign: "start",
              backgroundColor: "#f6c200",
              marginTop: "30px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h3"
              style={{
                color: "rgba(0, 0, 0, 0.8)",
                minHeight: "20px",
              }}
            ></Typography>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HireFormPage;
