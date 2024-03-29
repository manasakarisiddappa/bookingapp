import { useDispatch, useSelector } from "react-redux";
import { RATING } from "../../../Slices/filter-slice";
const ratings = ["1", "2", "3", "4", "5"];

export const Ratings = () => {
  const { traveloRating } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleRatingsClick = (rating) => {
    dispatch(RATING(rating));
  };

  return (
    <div className="filter-container">
      <span className="filter-label"> Ratings</span>
      <div className="d-flex align-center gap">
        {ratings.map((rating) => (
          <span
            className={`span-label amenity-count star d-flex align-center justify-center cursor-pointer on-hover ${
              rating === traveloRating.toString() && "selected"
            }`}
            key={rating}
            onClick={() => handleRatingsClick(rating)}
          >
            {rating} &Up
          </span>
        ))}
      </div>
    </div>
  );
};
