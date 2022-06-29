import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import SummaryAccordion from "./SummaryAccordion";
import ContentAccordion from "./ContentAccordion";
import "./SummaryAccordion.css";
import { Typography } from "@mui/material";
import { fetchOffers } from "../../../actions";
import { connect } from "react-redux";
import "./Offers.css";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={""} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, 0.02)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CustomizedAccordions({ offers, fetchOffers }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div>
      <Typography
        id="dayFilter"
        variant="h4"
        style={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Aujourd'hui
      </Typography>
      {offers.map((offer, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index + 1}d-content`}
              id={`panel${index + 1}d-header`}
              onClick={() => console.log("clicked")}
              id="divAccordionSummary"
            >
              <SummaryAccordion
                poste={offer.poste}
                entreprise={offer.entreprise}
                place={offer.place}
                tags={offer.tags}
              />
            </AccordionSummary>
            <AccordionDetails>
              <ContentAccordion
                howToApply={offer.howToApply}
                mission={offer.mission}
                description={offer.description}
                profile={offer.profile}
                id={offer._id}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
  };
};
export default connect(mapStateToProps, { fetchOffers })(CustomizedAccordions);
