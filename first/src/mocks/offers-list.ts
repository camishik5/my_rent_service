import { OfferList } from "../types/offer";

export const offersList: (OfferList[number] & { location: { latitude: number; longitude: number } })[] = [
  {
    id: "1",
    title: "Cozy Apartment in City Center",
    type: "apartment",
    price: 120,
    isPremium: true,
    previewImage: "img/apartment-01.jpg",
    rating: 4.8,
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 }
  },
  {
    id: "2",
    title: "Modern Room with Great View",
    type: "room",
    price: 80,
    isPremium: false,
    previewImage: "img/room.jpg",
    rating: 4.2,
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198 }
  },
  {
    id: "3",
    title: "Spacious House in Suburbs",
    type: "house",
    price: 200,
    isPremium: true,
    previewImage: "img/house-01.jpg",
    rating: 4.9,
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198 }
  },
  {
    id: "4",
    title: "Luxury Hotel Suite",
    type: "hotel",
    price: 350,
    isPremium: true,
    previewImage: "img/hotel-01.jpg",
    rating: 5.0,
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198 }
  }
];
