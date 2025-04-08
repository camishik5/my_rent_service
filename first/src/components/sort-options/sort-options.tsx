import { useState, MouseEvent } from "react";
import { SORT_TYPES } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeSorting } from "../../store/action";

function SortOptions() {
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.sortType);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSortTypeClick = (evt: MouseEvent<HTMLLIElement>, sortType: string) => {
    evt.preventDefault();
    dispatch(changeSorting(sortType));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {SORT_TYPES.map((type) => (
            <li
              key={type}
              className={`places__option ${type === currentSort ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={(evt) => handleSortTypeClick(evt, type)}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortOptions;
