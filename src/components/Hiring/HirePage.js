import React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import HireLogo from "./UpperPart/HireLogo";
import HireHeader from "./UpperPart/HireHeader";
import HireFormPage from "./LowerPart/HireFormPage";

function HirePage() {
  return (
    <>
      <CssBaseline />
      <HireLogo />
      <Container maxWidth="lg">
        <HireHeader />
      </Container>
      <HireFormPage />
    </>
  );
}

export default HirePage;
