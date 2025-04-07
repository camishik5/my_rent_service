import React from 'react';

type FavoriteCardProps = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  previewImage: string;
  rating: number;
};

function FavoriteCard({
  id,
  title,
  type,
  price,
  previewImage,
  rating,
}: FavoriteCardProps): React.JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            width="150"
            height="110"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/ night</span>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${(rating / 5) * 100}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
