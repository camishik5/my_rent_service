import React from 'react';
import CitiesCard from '../../components/cities-card/cities-card';
import Sorting from '../../components/Sorting';
import { Logo } from '../../components/logo/logo'; // ✅ Импорт логотипа

type MainPageProps = {
  rentalOffersCount: number;
};

function MainPage({ rentalOffersCount }: MainPageProps): React.JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo /> {/* ✅ Заменили a на компонент Logo */}
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
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#"><span>Paris</span></a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#"><span>Cologne</span></a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#"><span>Brussels</span></a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="#"><span>Amsterdam</span></a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#"><span>Hamburg</span></a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#"><span>Dusseldorf</span></a>
              </li>
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in Amsterdam</b>

              <Sorting />

              <div className="cities__places-list places__list tabs__content">
                <CitiesCard imageSrc="img/apartment-01.jpg" price={120} title="Beautiful & luxurious apartment at great location" rating={4} />
                <CitiesCard imageSrc="img/room.jpg" price={80} title="Wood and stone place" rating={3} />
                <CitiesCard imageSrc="img/apartment-02.jpg" price={132} title="Canal View Prinsengracht" rating={5} />
                <CitiesCard imageSrc="img/apartment-03.jpg" price={180} title="Nice, cozy, warm big bed apartment" rating={4} />
                <CitiesCard imageSrc="img/room.jpg" price={80} title="Wood and stone place" rating={3} />
              </div>
            </section>

            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
