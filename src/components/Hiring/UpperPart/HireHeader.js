import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./HireHeader.css";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12} style={{ minWidth: "400px" }}>
          <Item elevation="none">
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", color: "#000" }}
            >
              Publier une Offre d'Emploi
              <Typography>
                Renforcez vos équipes avec les meilleurs professionnels de l'IA
                en France
              </Typography>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={8} style={{ marginTop: "40px" }}>
          <Item
            elevation="none"
            style={{ textAlign: "start", minWidth: "450px" }}
          >
            <Typography
              style={{ marginBottom: "25px", fontSize: "18px", color: "#000" }}
            >
              Bonjour 👋
            </Typography>
            <Typography style={{ fontSize: "18px", color: "#000" }}>
              <p style={{ marginBottom: "10px" }}>
                Bienvenue sur <b>AI Jobs</b>, le plus grand site d'emplois pour
                trouver et publier des offres d'emploi dans les domaines de
                l'intelligence artificielle.
              </p>

              <p style={{ marginBottom: "10px" }}>
                {" "}
                AI Jobs est l'unique site d'emplois en France{" "}
                <b>100% dédié à l'intelligence artificielle</b>. Nous fédérons
                une communauté de 19 000 professionnels en veille et de profils
                spécialisés IA en recherche active afin de pousser votre offre
                auprès des bons candidats. Chaque mois 1 200 entreprises telles
                que <span style={{ color: "orange" }}>Thales</span>,
                <span style={{ color: "orange" }}>Tinyclues</span> et{" "}
                <span style={{ color: "orange" }}>Sophia Genetics</span> nous
                font ainsi confiance pour recruter leurs profils spécialisés IA
                en France.
              </p>
              <p>
                L'intelligence artificielle est sans doute le bouleversement le
                plus impactant depuis les débuts de l'Internet. C'est pourquoi
                nous avons crée AI Jobs. Nous permettons ainsi aux entreprises
                de trouver les meilleurs talents pour accélerer cette
                révolution.
              </p>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6} md={4} style={{ marginTop: "40px" }}>
          <Item elevation="none" style={{ backgroundColor: "#F8F8F8" }}>
            <Grid
              item
              xs={4}
              md={12}
              id="questionsDiv"
              style={{ minHeight: "155px" }}
            ></Grid>
            <Typography style={{ fontSize: "18px", color: "#000" }}>
              <p style={{ marginBottom: "20px" }}>
                Besoin d'aide pour publier votre annonce ? Des questions ?
              </p>
              <p style={{ marginBottom: "20px" }}>
                On est là pour ça, laissez nous un message et nous reviendrons
                vers vous au plus vite.
              </p>
            </Typography>
            <Button
              fullWidth
              variant="outlined"
              style={{ backgroundColor: "white" }}
            >
              Poser vos Questions
            </Button>
          </Item>
        </Grid>

        {/* <Grid item xs={6} md={12}>
          <Item>
            <Typography style={{ fontSize: "18px", color: "#000" }}>
              Comment ça marche ?
            </Typography>
          </Item>
        </Grid> */}
        <Grid item xs={6} md={12}>
          <Item elevation="none">
            <Typography
              style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.6)" }}
            >
              Ils recrutent en ce moment sur AI Jobs France
            </Typography>
            <Grid item xs={6} md={12}>
              <Item elevation="none" style={{ marginTop: "40px" }}>
                <Grid
                  container
                  item
                  spacing={1}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Grid item md={2}>
                    <Item id="logo1" elevation="none"></Item>
                  </Grid>
                  <Grid item md={2}>
                    <Item id="logo2" elevation="none"></Item>
                  </Grid>
                  <Grid item md={2}>
                    <Item id="logo3" elevation="none"></Item>
                  </Grid>
                  <Grid item md={2}>
                    <Item id="logo4" elevation="none"></Item>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Grid item md={2}>
                    <Item id="logo5" elevation="none"></Item>
                  </Grid>
                  <Grid item md={2}>
                    <Item id="logo6" elevation="none"></Item>
                  </Grid>
                  <Grid item md={2}>
                    <Item id="logo7" elevation="none"></Item>
                  </Grid>
                  <Grid item md={2}>
                    <Item id="logo8" elevation="none"></Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
