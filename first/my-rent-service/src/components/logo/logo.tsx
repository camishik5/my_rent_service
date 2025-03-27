import React from 'react';
import { Link } from 'react-router-dom';

function Logo(): React.ReactElement {
  return (
    <Link to='/' className="header__logo-link header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" />
    </Link>
  );
}

export { Logo };
