import { Grid, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

function SecondDivPreview({ form }) {
  function renderDescription() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.description) {
          return form.infoForm.values.description;
        }
      } else {
        return 'Ce qui est saisi dans le champ "Descriptif du poste" sera placé ici.';
      }
    }
    return ' Ce qui est saisi dans le champ "Descriptif du poste" sera placé ici.';
  }

  function renderMission() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.mission) {
          return form.infoForm.values.mission;
        }
      } else {
        return ' Ce qui est saisi dans le champ "Missions" sera placé ici. ';
      }
    }
    return ' Ce qui est saisi dans le champ "Missions" sera placé ici. ';
  }

  function renderProfile() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.profile) {
          return form.infoForm.values.profile;
        }
      } else {
        return ' Ce qui est saisi dans le champ "Profil recherché" sera placé ici. ';
      }
    }
    return '  Ce qui est saisi dans le champ "Profil recherché" sera placé ici. ';
  }

  return (
    <Grid style={{ textAlign: "start", margin: "20px", marginTop: "0px" }}>
      <Grid style={{ paddingTop: "40px" }}>
        <Typography style={{ minHeight: "100px" }}>
          {renderDescription()}
        </Typography>
      </Grid>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Missions
      </Typography>
      <Typography style={{ minHeight: "100px" }}>{renderMission()}</Typography>
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        Profil recherché
      </Typography>
      <Typography style={{ minHeight: "100px" }}>{renderProfile()}</Typography>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};
export default connect(mapStateToProps)(SecondDivPreview);
