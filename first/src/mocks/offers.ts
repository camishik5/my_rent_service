import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
  {
    id: "1",
    title: "Cozy Apartment in City Center",
    type: "apartment",
    price: 120,
    city: { name: "Paris", location: { latitude: 48.5112, longitude: 2.2055, zoom: 8 } },
    location: { latitude: 48.5112, longitude: 2.2055 },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description: "A cozy apartment in the heart of Paris.",
    bedrooms: 2,
    goods: ["Wi-Fi", "Washing machine", "Coffee machine"],
    host: { avatar: "img/avatar-angelina.jpg", name: "Angelina", isPro: true },
    images: ["img/apartment-01.jpg", "img/apartment-02.jpg", "img/apartment-03.jpg"],
    maxAdults: 4
  },
  {
    id: "2",
    title: "Modern Room with Great View",
    type: "room",
    price: 80,
    city: { name: "Paris", location: { latitude: 48.5112, longitude: 2.2055, zoom: 8 } },
    location: { latitude: 48.5112, longitude: 2.2555 },
    isFavorite: true,
    isPremium: false,
    rating: 4.2,
    description: "A modern room with an amazing view.",
    bedrooms: 1,
    goods: ["Wi-Fi", "Heating"],
    host: { avatar: "img/avatar-max.jpg", name: "Max", isPro: false },
    images: ["img/room.jpg", "img/room-02.jpg"],
    maxAdults: 2
  },
  {
    id: "3",
    title: "Spacious House in Suburbs",
    type: "house",
    price: 200,
    city: { name: "Paris", location: { latitude: 48.5112, longitude: 2.2055, zoom: 8 } },
    location: { latitude: 48.5012, longitude: 2.1955 },
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    description: "A spacious house perfect for families.",
    bedrooms: 4,
    goods: ["Wi-Fi", "Parking", "Garden"],
    host: { avatar: "img/avatar-john.jpg", name: "John", isPro: true },
    images: ["img/house-01.jpg", "img/house-02.jpg"],
    maxAdults: 6
  }
];
