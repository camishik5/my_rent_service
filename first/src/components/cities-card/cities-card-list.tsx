import { FullOffer } from "../../types/offer";
import { useAppDispatch } from "../../hooks";
import { setActiveOffer } from "../../store/action";
import CitiesCard from "../cities-card/cities-card";

type CitiesCardListProps = {
  offers: FullOffer[];
};

function CitiesCardList({ offers }: CitiesCardListProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard
          key={offer.id}
          id={offer.id}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          isPremium={offer.isPremium}
          previewImage={offer.images[0]}
          rating={offer.rating}
          onMouseEnter={(id) => dispatch(setActiveOffer(id))}
          onMouseLeave={() => dispatch(setActiveOffer(null))}
        />
      ))}
    </div>
  );
}

export default CitiesCardList;
