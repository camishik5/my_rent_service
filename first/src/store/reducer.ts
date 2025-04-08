import { createReducer } from "@reduxjs/toolkit";
import { changeCity, fillOffers, changeSorting, setActiveOffer } from "./action";
import { FullOffer } from "../types/offer";
import { getOffersByCity, sortOffers } from "../utils";

type State = {
  city: string;
  offers: FullOffer[];
  filteredOffers: FullOffer[];
  sortType: string;
  activeOfferId: string | null;
};

const initialState: State = {
  city: "Paris",
  offers: [],
  filteredOffers: [],
  sortType: "Popular",
  activeOfferId: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.filteredOffers = getOffersByCity(state.offers, state.city);
      state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
      state.filteredOffers = getOffersByCity(state.offers, state.city);
      state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
    })
    .addCase(changeSorting, (state, action) => {
      state.sortType = action.payload;
      state.filteredOffers = sortOffers(state.filteredOffers, state.sortType);
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOfferId = action.payload;
    });
});
