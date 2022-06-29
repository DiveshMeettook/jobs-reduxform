import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./HeaderOffer.css";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Tags() {
  return (
    <Grid item xs={12}>
      <Item
        style={{
          minHeight: "15vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation="none"
      >
        <Typography
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          Populaires :
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          id="divTagsHeader"
        >
          <Chip
            label="Informatique"
            onClick={() => {}}
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              backgroundColor: "#f94d00",
              color: "white",
              fontSize: "15px",
              marginBottom: "5px",
            }}
            className="tagHeader"
          />
          <Chip
            label="Consultant"
            onClick={() => {}}
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              backgroundColor: "#f94d00",
              color: "white",
              fontSize: "15px",
              marginBottom: "5px",
            }}
            className="tagHeader"
          />
          <Chip
            label="Enseignement"
            onClick={() => {}}
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              backgroundColor: "#f94d00",
              color: "white",
              fontSize: "15px",
              marginBottom: "5px",
            }}
            className="tagHeader"
          />
          <Chip
            label="Stage"
            onClick={() => {}}
            style={{
              marginRight: "5px",
              marginLeft: "5px",
              backgroundColor: "#f94d00",
              color: "white",
              fontSize: "15px",
              marginBottom: "5px",
            }}
            className="tagHeader"
          />
        </div>
      </Item>
    </Grid>
  );
}

export default Tags;
