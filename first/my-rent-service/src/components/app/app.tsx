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

type AppMainPageProps = {
  rentalOffersCount: number;
};

// ВРЕМЕННО: статус авторизации (можешь поменять на AuthorizationStatus.Auth для проверки)
const authorizationStatus = AuthorizationStatus.NoAuth;

function App({ rentalOffersCount }: AppMainPageProps): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffersCount={rentalOffersCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
