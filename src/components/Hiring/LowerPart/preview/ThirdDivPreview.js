import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { connect } from "react-redux";

function ThirdDivPreview({ form }) {
  function renderHowToApply() {
    if (form.infoForm) {
      if (form.infoForm.values) {
        if (form.infoForm.values.howToApply) {
          return form.infoForm.values.howToApply;
        }
      } else {
        return 'Ce qui est saisi dans le champ "Comment postuler" sera placé ici.';
      }
    }
    return 'Ce qui est saisi dans le champ "Comment postuler" sera placé ici.';
  }

  return (
    <Grid style={{ paddingTop: "30px", marginRight: "10px" }}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Comment postuler ?
      </Typography>
      <Typography style={{ marginTop: "30px", minHeight: "100px" }}>
        {renderHowToApply()}
      </Typography>
      <Button variant="contained" disabled style={{ marginBottom: "20px" }}>
        Postuler
      </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};
export default connect(mapStateToProps)(ThirdDivPreview);
