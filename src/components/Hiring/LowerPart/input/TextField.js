import React from "react";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";

function renderInput({ input, label, helperText }) {
  return (
    <>
      <Typography style={{ margin: 8 }}>{label}</Typography>
      <TextField
        id="outlined-full-width"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        {...input}
        helperText={helperText}
      />
    </>
  );
}

export default renderInput;
