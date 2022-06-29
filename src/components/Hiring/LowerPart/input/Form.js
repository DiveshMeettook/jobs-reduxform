import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Field, reduxForm } from "redux-form";
import Button from "@mui/material/Button";
import { addOffer } from "../../../../actions";
import { connect } from "react-redux";
import TextField from "./TextField";
import CheckBox from "./CheckBox";
function Input1({ handleSubmit, addOffer }) {
  async function onSubmit(formValues) {
    await addOffer(formValues);
    formValues.poste = "";
    formValues.entreprise = "";
    formValues.place = "";
    formValues.tags = "";
    formValues.description = "";
    formValues.mission = "";
    formValues.profile = "";
    formValues.howToApply = "";
    formValues.applicationWebsite = "";
    formValues.email = "";
    formValues.twitterAccount = "";
    formValues.emailClient = "";
    formValues.salary = "";
  }

  return (
    <Grid style={{ textAlign: "start" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          style={{
            textAlign: "start",
            fontWeight: "bold",
            color: "#e5b500",
            fontSize: "24px",
            marginTop: "20px",
            marginBottom: "25px",
          }}
        >
          Tout d'abord, parlez-nous du poste
        </Typography>
        <Field name="poste" component={TextField} label="Poste" helperText="" />
        <Field
          name="entreprise"
          component={TextField}
          label="Entreprise"
          helperText=""
        />
        <Field
          name="place"
          component={TextField}
          label=" Dans quelle ville est basée le poste ?
          "
          helperText='Exemple : "Toulouse", "Paris 75011", "la France entière"'
        />
        <Field
          name="tags"
          component={TextField}
          label="Mots-clés          "
          helperText="Ajoutez 3 mots-clés tels que le langage de programmation, le domaine d'expertise, l'industrie, les technos, le niveau de hiérarchie, le type d'emploi et les séparer par une virgule.          "
        />
        <Field
          name="description"
          component={TextField}
          label="Descriptif du poste          "
          helperText=""
        />
        <Field
          name="mission"
          component={TextField}
          label="Missions          "
          helperText="Champ facultatif          "
        />
        <Field
          name="profile"
          component={TextField}
          label="Profil recherché          "
          helperText="Champ facultatif          "
        />
        <Field
          name="salary"
          component={TextField}
          label="Salaire          "
          helperText="Champ facultatif          "
        />
        <Field
          name="howToApply"
          component={TextField}
          label="Comment postuler ?          "
          helperText="Champ facultatif          "
        />
        <Field
          name="applicationWebsite"
          component={TextField}
          label="Page Web pour postuler (URL)          "
          helperText="Permet de rediriger les candidats vers un autre site pour postuler          "
        />
        <Typography style={{ textAlign: "center", marginTop: "40px" }}>
          ou
        </Typography>

        <Field
          name="email"
          component={TextField}
          label="Email pour postuler          "
          helperText="Cet email est public. Les candidats pourront postuler en envoyant un email à cette adresse si vous ne fournissez pas une Page Web plus haut.  "
        />
        <Typography
          style={{
            textAlign: "start",
            fontWeight: "bold",
            color: "#e5b500",
            fontSize: "24px",
            marginTop: "10px",
            marginBottom: "25px",
          }}
        >
          Passons à quelques informations sur votre entreprise
        </Typography>
        <Field name="logo" component={TextField} label="Logo" helperText="" />
        <Field
          name="twitterAccount"
          component={TextField}
          label="Compte twitter de l'entreprise          "
          helperText="Champ facultatif, mais nous permet d'inclure votre twitter lorsque nous tweetons votre offre d'emploi          "
        />
        <Field
          name="emailClient"
          component={TextField}
          label="Email de contact Client (reste privé, pour la facturation)          "
          helperText="Assurez-vous d'avoir accès à cet email ! Nous l'utiliserons pour envoyer votre facture et le lien pour modifier votre annonce plus tard.
          "
        />
        <Typography
          style={{
            textAlign: "start",
            fontWeight: "bold",
            color: "#e5b500",
            fontSize: "24px",
            marginTop: "10px",
            marginBottom: "25px",
          }}
        >
          Recevoir plus de candidatures
        </Typography>

        <Typography style={{ marginTop: "40px", marginBottom: "40px" }}>
          Augmentez la visiblité de votre offre d'emploi grâce à un highlight de
          couleur (<b>+23% de candidatures</b>) ou à un placement en haut des
          pages de résultats (<b>+52% de candidatures</b>).
        </Typography>

        <Field
          name="ad1"
          component={CheckBox}
          label="Mettre en évidence l'annonce par un highlight de couleur rouge (+9 €)          "
        />
        <Field
          name="ad2"
          component={CheckBox}
          label="Mettre en évidence l'annonce par un highlight d'une couleur de votre choix (ex: votre couleur de marque) (+19 €) "
        />
        <Field
          name="ad3"
          component={CheckBox}
          label="Épingler mon annonce en haut des pages de résultats pendant une semaine entière (+9 €) — seulement 3 spots encore disponibles         "
        />
        <Field
          name="ad4"
          component={CheckBox}
          label="Épingler mon annonce en haut des pages de résultats pendant un mois entier (+19 €) — seulement 5 spots encore disponibles "
        />
        <Button
          type="submit"
          variant="default"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "white",
            backgroundColor: "#f6c200",
            minHeight: "40px",
          }}
          fullWidth
        >
          Publier votre Annonce
        </Button>
      </form>
    </Grid>
  );
}

export default connect(null, { addOffer })(
  reduxForm({ form: "infoForm" })(Input1)
);
