import React from 'react';
import { Logo } from '../../components/logo/logo';

function Login(): React.JSX.Element {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <h1>Login page</h1>
      </main>
    </div>
  );
}

export default Login;
