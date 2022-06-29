import React from "react";
import HeaderText from "./HeaderText";
import ExploreJobs from "./ExploreJobs";
import OffresDemploi from "./OffresDemploi";
import Tags from "./Tags";
import "./HeaderOffer.css";

function HeaderOffer() {
  return (
    <>
      <HeaderText />
      <ExploreJobs />
      <OffresDemploi />
      <Tags />
    </>
  );
}

export default HeaderOffer;
