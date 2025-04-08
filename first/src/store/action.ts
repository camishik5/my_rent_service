import { createAction } from "@reduxjs/toolkit";
import { FullOffer } from "../types/offer";

export const changeCity = createAction<string>("changeCity");
export const fillOffers = createAction<FullOffer[]>("fillOffers");
export const changeSorting = createAction<string>("changeSorting");
export const setActiveOffer = createAction<string | null>("setActiveOffer");
