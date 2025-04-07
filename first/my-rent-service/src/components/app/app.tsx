import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import PageNotFound from '../../pages/not-found/not-found';

import AppRoute from '../../const/app-route';
import { AuthorizationStatus } from '../../const';
import { PrivateRoute } from '../../components/private-route/private-route';
import { FullOffer, OffersList } from '../../types/offer';
import { offers, offersList } from '../../mocks/offers';

type AppMainPageProps = {
  rentalOffersCount: number;
  offers: FullOffer[];
  offersList: OffersList[];
};

const authorizationStatus = AuthorizationStatus.NoAuth;

function App({ rentalOffersCount, offers, offersList }: AppMainPageProps): React.JSX.Element {
  // Вычисляем избранные предложения:
  const favorites = offersList.filter((offer) => offer.isFavorite);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />
          }
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer offers={offers} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
