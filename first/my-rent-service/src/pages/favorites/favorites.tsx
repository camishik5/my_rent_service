import React from 'react';
import FavoriteCardList from '../../components/favorite-card-list/favorite-card-list';
import { OffersList } from '../../types/offer';
import { Helmet } from 'react-helmet';
import { Logo } from '../../components/logo/logo';

type FavoritesProps = {
  favorites: OffersList[];
};

function Favorites({ favorites }: FavoritesProps): React.JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
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
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteCardList favorites={favorites} />
        </div>
      </main>
    </div>
  );
}

export default Favorites;
