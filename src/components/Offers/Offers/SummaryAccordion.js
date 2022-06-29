import * as React from "react";
import Grid from "@mui/material/Grid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import "./SummaryAccordion.css";

export default function BasicGrid({ poste, entreprise, tags, place }) {
  return (
    <Grid container id="divSummary">
      <div id="divMainInfo">
        <div id="divLogo"></div>
        <div id="divName">
          <Typography
            variant="h6"
            style={{ width: "max-content   " }}
            onClick={(e) => e.stopPropagation()}
            id="divNameTitle"
          >
            {poste}
          </Typography>
          <Typography
            style={{ fontSize: "13px", width: "max-content   " }}
            id="divNameSubTitle"
            onClick={(e) => e.stopPropagation()}
          >
            {entreprise}
          </Typography>
          <div id="divTags">
            {window.innerWidth > 620 ? (
              ""
            ) : (
              <Typography>
                <p className="tag" onClick={(e) => e.stopPropagation()}>
                  {place}
                </p>
              </Typography>
            )}
            <Typography>
              {tags.split(",")[0] ? (
                <p className="tag" onClick={(e) => e.stopPropagation()}>
                  {tags.split(",")[0]}
                </p>
              ) : (
                ""
              )}
            </Typography>
            <Typography>
              {tags.split(",")[1] ? (
                <p className="tag" onClick={(e) => e.stopPropagation()}>
                  {tags.split(",")[1]}
                </p>
              ) : (
                ""
              )}
            </Typography>
            <Typography>
              {tags.split(",")[2] ? (
                <p className="tag" onClick={(e) => e.stopPropagation()}>
                  {tags.split(",")[2]}
                </p>
              ) : (
                ""
              )}
            </Typography>
          </div>
        </div>
      </div>

      <div id="divLocation">
        <Chip
          icon={<LocationOnIcon style={{ color: "white" }} />}
          label={place}
          variant="outlined"
          style={{
            width: "110px",
            backgroundColor: "#00308F",
            color: "white",
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div id="divTime">
        <Typography
          onClick={(e) => e.stopPropagation()}
          style={{ width: "max-content   " }}
        >
          7h
        </Typography>
      </div>
    </Grid>
  );
}
