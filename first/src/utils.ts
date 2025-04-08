import { FullOffer } from "./types/offer";
import { CITIES_LOCATION, SORT_TYPES } from "./const";

export function getOffersByCity(offers: FullOffer[], cityName: string) {
  return offers.filter((offer) => offer.city.name === cityName);
}

export function sortOffers(offers: FullOffer[], sortType: string): FullOffer[] {
  switch (sortType) {
    case "Price: low to high":
      return [...offers].sort((a, b) => a.price - b.price);
    case "Price: high to low":
      return [...offers].sort((a, b) => b.price - a.price);
    case "Top rated first":
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}
