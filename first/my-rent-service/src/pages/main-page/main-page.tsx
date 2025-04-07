import React from 'react';
import CitiesCard from '../../components/cities-card/cities-card';
import Sorting from '../../components/Sorting';
import { Logo } from '../../components/logo/logo';
import Map from '../../components/map/map';
import { OffersList } from '../../types/offer';
import { offers } from '../../mocks/offers';

type MainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
};

function MainPage({ rentalOffersCount, offersList }: MainPageProps): React.JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'].map((city) => (
                <li className="locations__item" key={city}>
                  <a className={`locations__item-link tabs__item ${city === 'Amsterdam' ? 'tabs__item--active' : ''}`} href="#">
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>

              <Sorting />

              <div
                className="cities__places-list places__list tabs__content"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px'
                }}
              >
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
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
