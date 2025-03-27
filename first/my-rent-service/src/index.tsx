import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App rentalOffersCount={312} />
    </React.StrictMode>
  );
}
