import React from 'react';
import FavoriteCard from '../favorite-card/favorite-card';
import { OffersList } from '../../types/offer';

type FavoriteCardListProps = {
  favorites: OffersList[];
};

function FavoriteCardList({ favorites }: FavoriteCardListProps): React.JSX.Element {
  return (
    <div className="favorites__list">
      {favorites.map((offer) => (
        <FavoriteCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          rating={offer.rating}
        />
      ))}
    </div>
  );
}

export default FavoriteCardList;
