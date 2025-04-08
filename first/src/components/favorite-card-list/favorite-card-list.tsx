import FavoriteCard from "../favorite-card/favorite-card";
import { OfferList } from "../../types/offer";

type FavoriteCardListProps = {
  favoriteOffers: OfferList;
};

function FavoriteCardList({ favoriteOffers }: FavoriteCardListProps) {
  return (
    <ul className="favorites__list">
      {favoriteOffers.map((offer) => (
        <li key={offer.id} className="favorites__locations-items">
          <FavoriteCard
            id={offer.id}
            title={offer.title}
            type={offer.type}
            price={offer.price}
            isPremium={offer.isPremium}
            previewImage={offer.previewImage}
            rating={offer.rating}
          />
        </li>
      ))}
    </ul>
  );
}

export default FavoriteCardList;
