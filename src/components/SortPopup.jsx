import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

const SortPopup = React.memo(function SortPopup({
  items,
  activeSortType,
  onClickSort,
}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const popupRef = React.useRef(null);

  React.useEffect(() => {
    handleOutsideClick();
  }, []);

  const handleOutsideClick = (e) => {
    document.body.addEventListener("click", (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      !path.includes(popupRef.current) && setVisiblePopup(false);
    });
  };
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const setSortBy = (type) => {
    setVisiblePopup(false);
    onClickSort(type);
  };
  return (
    <div className="sort" ref={popupRef}>
      <div
        className={classNames("sort__label", { popup: visiblePopup })}
        onClick={toggleVisiblePopup}
      >
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>

        <b>Сортировка по:</b>
        <span>
          {items.find((item) => item.type === activeSortType.type).name}
        </span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((item, idx) => {
                return (
                  <li
                    key={`${item.type}_${idx}`}
                    onClick={() => {
                      setSortBy(item);
                    }}
                    className={
                      item.type === activeSortType.type ? "active" : ""
                    }
                  >
                    {item.name}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortType: PropTypes.object.isRequired,
  onClickSort: PropTypes.func.isRequired,
};

export default SortPopup;
