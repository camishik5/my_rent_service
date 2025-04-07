import React from 'react';
import { useParams } from 'react-router-dom';
import { FullOffer } from '../../types/offer';
import PageNotFound from '../not-found/not-found';
import { Logo } from '../../components/logo/logo';
import CommentForm from '../../components/comment-form/comment-form';

type OfferProps = {
  offers: FullOffer[];
};

function Offer({ offers }: OfferProps): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <PageNotFound />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image, index) => (
                <div key={index} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={image}
                    alt={`Photo of ${offer.title}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__wrapper">
            {offer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}

            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.title}</h1>
              <p className="offer__type">{offer.type}</p>
            </div>

            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&#47;&nbsp;night</span>
            </div>

            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>

            <div className="offer__description">
              <p>{offer.description}</p>
            </div>

            <ul className="offer__goods">
              {offer.goods.map((item, index) => (
                <li key={index} className="offer__good">{item}</li>
              ))}
            </ul>

            <div className="offer__host">
              <h2>Meet the host</h2>
              <div className="offer__host-user">
                <img
                  className="offer__avatar"
                  src={offer.host.avatarUrl}
                  alt={offer.host.name}
                />
                <span className="offer__user-name">{offer.host.name}</span>
                {offer.host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
            </div>

            <div className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews</h2>
              {/* Здесь вместо разметки формы комментария добавляем новый компонент */}
              <CommentForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Offer;
