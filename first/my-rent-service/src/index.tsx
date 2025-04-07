import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { offers, offersList } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
      rentalOffersCount={Setting.rentOffersCount}
      offers={offers}
      offersList={offersList}
    />
  </React.StrictMode>
);
