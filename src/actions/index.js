export const fetchOffers = () => {
  return {
    type: "FETCH_OFFERS",
  };
};

export const addOffer = (offer) => {
  return {
    type: "ADD_OFFER",
    payload: offer,
  };
};

export const previewOffer = (formValues) => {
  return {
    type: "PREVIEW_OFFER",
    payload: formValues,
  };
};
