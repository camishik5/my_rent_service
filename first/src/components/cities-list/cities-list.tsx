import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCity } from "../../store/action";
import { CITIES_LOCATION } from "../../const";

function CitiesList() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  const handleCityClick = (evt: MouseEvent<HTMLAnchorElement>, cityName: string) => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={`locations__item-link tabs__item ${city.name === currentCity ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={(evt) => handleCityClick(evt, city.name)}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
