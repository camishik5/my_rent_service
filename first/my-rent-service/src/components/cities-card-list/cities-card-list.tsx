import React from 'react';
import CitiesCard from '../cities-card/cities-card';
import { OffersList } from '../../types/offer';

type CitiesCardListProps = {
  offersList: OffersList[];
};

function CitiesCardList({ offersList }: CitiesCardListProps): React.JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((offer) => (
        <CitiesCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          previewImage={offer.previewImage}
          isPremium={offer.isPremium}
          rating={offer.rating}
          isFavorite={offer.isFavorite}
        />
      ))}
    </div>
  );
}

export default CitiesCardList;
