import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: '1',
    date: '2023-05-15',
    user: {
      name: 'John Doe',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    comment: 'Great place! Very comfortable and clean.',
    rating: 4.5,
  },
  {
    id: '2',
    date: '2023-06-10',
    user: {
      name: 'Jane Smith',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment: 'Nice location, but the room was a bit small.',
    rating: 3.8,
  },
];
