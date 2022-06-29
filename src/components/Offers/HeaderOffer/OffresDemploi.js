import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import "./HeaderOffer.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function OffreDemploi() {
  const history = useHistory();
  return (
    <Grid item xs={12}>
      <Item style={{ minHeight: "15vh" }} elevation="none">
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            textAlign: "start",
            marginBottom: "30px",
            marginTop: "30px",
            color: "black",
          }}
          id="textOffreTitle"
        >
          Offres d'emploi:
        </Typography>
        <Grid item xs={12}>
          <Item elevation="none">
            <div style={{ border: "1px solid #E0E0E0" }}>
              <Typography
                style={{
                  marginTop: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
                id="textOffreContent"
              >
                👉 Vous recrutez dans l'Intelligence Artificielle ? Publiez une
                offre d'emploi qui atteint 19 000 profils spécialisés IA
              </Typography>
              <Button
                variant="default"
                id="buttonOffre"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "#f6c200",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                onClick={() => history.push("/hire")}
              >
                Publier votre Annonce
              </Button>
            </div>
          </Item>
        </Grid>
      </Item>
    </Grid>
  );
}

export default OffreDemploi;
