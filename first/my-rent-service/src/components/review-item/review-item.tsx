import React from 'react';
import { Review } from '../../types/review';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewItemProps): React.JSX.Element {
  const { user, comment, date, rating } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            alt={user.name}
            width="54"
            height="54"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro && <span className="reviews__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {new Date(date).toLocaleDateString()}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
