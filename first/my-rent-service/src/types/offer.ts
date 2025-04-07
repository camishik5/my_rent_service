export type OfferLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  
  export type CityOffer = {
    name: string;
    location: OfferLocation;
  };
  
  export type HostOffer = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  
  export type FullOffer = {
    id: string;
    title: string;
    type: 'apartment' | 'room' | 'house' | 'hotel';
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: HostOffer;
    images: string[];
    maxAdults: number;
  };
  
  export type OffersList = {
    id: string;
    title: string;
    type: 'apartment' | 'room' | 'house' | 'hotel';
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string; // Главное изображение, обычно первый элемент из FullOffer.images
  };
  