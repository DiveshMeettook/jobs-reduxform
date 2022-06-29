import React from "react";
import Logo from "./Logo";
import HeaderOffer from "./HeaderOffer/HeaderOffer";
import Offers from "./Offers/Offers";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import "./OffersPage.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function OffersPage() {
  return (
    <>
      <Logo />
      <div className="container">
        <Grid container spacing={2}>
          <Grid
            elevation="none"
            item
            xs={12}
            style={{ minHeight: "80vh", marginTop: "40px" }}
          >
            <HeaderOffer />
          </Grid>
          <Grid item xs={12} id="divOffers">
            <Offers />
          </Grid>
        </Grid>
      </div>
      {/* //the yellow border in bottom */}
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
    </>
  );
}

export default OffersPage;
