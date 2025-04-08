import { Review } from "../types/review";

export const reviews: Review[] = [
  {
    id: "1",
    user: { name: "Max", avatar: "img/avatar-max.jpg" },
    rating: 4.8,
    comment: "A quiet cozy and picturesque place.",
    date: "2019-04-24"
  },
  {
    id: "2",
    user: { name: "John", avatar: "img/avatar-john.jpg" },
    rating: 4.5,
    comment: "Amazing service and friendly hosts.",
    date: "2020-06-15"
  }
];
