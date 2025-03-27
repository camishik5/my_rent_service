import React from 'react';
import { Logo } from '../../components/logo/logo';

function PageNotFound(): React.JSX.Element {
  return (
    <div className="page page--gray page--not-found">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <h1>404 — Страница не найдена</h1>
        <p>Вы попали на несуществующую страницу.</p>
      </main>
    </div>
  );
}

export default PageNotFound;
