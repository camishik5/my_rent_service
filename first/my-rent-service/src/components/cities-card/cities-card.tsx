import React, { useState } from 'react';

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  isFavorite: boolean;
};

function CitiesCard({
  id,
  title,
  type,
  price,
  isPremium,
  previewImage,
  rating,
  isFavorite,
}: CitiesCardProps): React.JSX.Element {
  // Состояние активной карточки (при наведении)
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <article
      className={`place-card ${isActive ? 'active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className="place-card__image-wrapper"
        style={{ width: '260px', height: '200px', overflow: 'hidden' }}
      >
        <a href={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
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

export default CitiesCard;
