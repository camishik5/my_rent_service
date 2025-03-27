import React from 'react';
import { Logo } from '../../components/logo/logo';

function Offer(): React.JSX.Element {
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

      <main className="page__main page__main--property">
        <h1>Offer page</h1>
      </main>
    </div>
  );
}

export default Offer;
