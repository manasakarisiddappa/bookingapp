import "./Filter.css";
import {
  PriceRange,
  RoomsAndBeds,
  PropertyType,
  Ratings,
  FreeCancel,
} from "./index";
import { SHOW_FILTER_MODAL, CLEAR_ALL } from "../../Slices/filter-slice";

import { useDispatch } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterModalCloseClick = () => {
    dispatch(SHOW_FILTER_MODAL());
  };

  const handleClearFilterClick = () => {
    dispatch(CLEAR_ALL());
  };

  return (
    <div className="filter-modal">
      <div className="filter-page shadow">
        <div className="d-flex align-center justify-space-between">
          <span className="filter-label">Filter</span>
          <button
            className="button btn-close cursor-pointer d-flex align-center justify-center"
            onClick={handleFilterModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Ratings />
        <FreeCancel />
        <div className="d-flex align-center justify-space-between">
          <button
            className="button cursor btn-link-primary"
            onClick={handleClearFilterClick}
          >
            Clear All
          </button>
          <button
            className="button cursor btn-primary btn-apply"
            onClick={handleFilterModalCloseClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
