import React from "react";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

function renderCheckbox({ input, label }) {
  return (
    <>
      <FormGroup row style={{ marginBottom: "30px" }}>
        <FormControlLabel
          {...input}
          control={<Checkbox name="checkedB" color="primary" />}
          label={label}
        />
      </FormGroup>
    </>
  );
}

export default renderCheckbox;
