import { Logo } from "../../components/logo/logo";
import CitiesList from "../../components/cities-list/cities-list";
import SortOptions from "../../components/sort-options/sort-options";
import CitiesCardList from "../../components/cities-card/cities-card-list";
import Map from "../../components/map/map";
import { useAppSelector } from "../../hooks";

function MainPage() {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.filteredOffers);

  return (
    <div className="page page--gray page--main">
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
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <SortOptions />
              <CitiesCardList offers={offers} />
            </section>
            <div className="cities__right-section">
              {offers.length > 0 && (
                <section className="cities__map map">
                  <Map offers={offers} />
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
