import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import "./HeaderOffer.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ExploreJobs() {
  return (
    <Grid item xs={12}>
      <Item style={{ minHeight: "15vh" }} elevation="none">
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            textAlign: "start",
            marginBottom: "30px",
            color: "black",
          }}
          id="textExploreTitle"
        >
          Explore AI Jobs:
        </Typography>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item md={3}>
            <Item
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <WorkOutlineIcon style={{ marginTop: "10px" }} />
              <Typography
                style={{
                  fontWeight: "bold",
                  minHeight: "30px",
                  marginTop: "10px",
                  cursor: "pointer",
                  color: "black",
                  fontSize: "18px",
                }}
                className="textExploreButton"
              >
                Trouver des emplois
              </Typography>
            </Item>
          </Grid>
          <Grid item md={3}>
            <Item
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                cursor: "pointer",
              }}
            >
              <HomeWorkIcon style={{ marginTop: "10px" }} />
              <Typography
                style={{
                  fontWeight: "bold",
                  minHeight: "30px",
                  marginTop: "10px",
                  color: "black",
                  fontSize: "18px",
                }}
                className="textExploreButton"
              >
                Découvrir les entreprises
              </Typography>
            </Item>
          </Grid>
          <Grid item md={3}>
            <Item
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <WorkspacesIcon style={{ marginTop: "10px" }} />
              <Typography
                style={{
                  fontWeight: "bold",
                  minHeight: "30px",
                  marginTop: "10px",
                  cursor: "pointer",
                  color: "black",
                  fontSize: "18px",
                }}
                className="textExploreButton"
              >
                Apprendre et se former
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
}

export default ExploreJobs;
