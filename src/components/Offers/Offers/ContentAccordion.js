import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import "./ContentAccordion.css";

function SecondDivPreview({ description, mission, profile, howToApply, id }) {
  const history = useHistory();
  return (
    <>
      <Grid
        style={{ textAlign: "start", marginTop: "0px" }}
        id="divContentAccordion"
      >
        <Grid style={{ paddingTop: "40px" }}>
          <Typography id="descriptionText" style={{ minHeight: "100px" }}>
            {description}
          </Typography>
        </Grid>
        <Typography
          id="missionTitle"
          variant="h5"
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Missions
        </Typography>
        <Typography id="missionText" style={{ minHeight: "100px" }}>
          {mission}
        </Typography>
        <Typography
          id="profileTitle"
          variant="h5"
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Profil recherché
        </Typography>
        <Typography id="profileText" style={{ minHeight: "100px" }}>
          {profile}
        </Typography>
      </Grid>
      <Grid
        style={{
          paddingTop: "30px",
          marginRight: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          id="howToApplyTitle"
          variant="h5"
          style={{
            fontWeight: "bold",
            borderTop: "0.5px solid #E8E8E8",
            paddingTop: "30px",
          }}
        >
          Comment postuler ?
        </Typography>
        <Typography
          id="howToApplyText"
          style={{ marginTop: "30px", minHeight: "50px" }}
        >
          {howToApply}
        </Typography>
        <Button
          variant="default"
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#f6c200",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          onClick={() => history.push(`/offers/:${id}`)}
        >
          Postuler
        </Button>
        <Typography
          id="remarkText"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          N'hésitez pas à indiquer que vous avez trouvé l'offre d'emploi sur AI
          Jobs pour nous soutenir, cela incite plus d'entreprises à publier ici
          !
        </Typography>
      </Grid>
    </>
  );
}

export default SecondDivPreview;
