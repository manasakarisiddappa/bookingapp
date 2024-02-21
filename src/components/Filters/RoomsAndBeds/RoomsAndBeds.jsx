import { useDispatch, useSelector } from "react-redux";
import { BEDROOMS, BATHROOMS, BEDS } from "../../../Slices/filter-slice";
const numbersOfAmenities = ["Any", "1", "2", "3", "4", "5+"];

export const RoomsAndBeds = () => {
  const { noOfBathrooms, noOfBedrooms, noOfBeds } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const handleBedroomsClick = (number) => {
    dispatch(BEDROOMS(number));
  };

  const handleBathroomsClick = (number) => {
    dispatch(BATHROOMS(number));
  };

  const handleBedsClick = (number) => {
    dispatch(BEDS(number));
  };

  console.log({ noOfBathrooms, noOfBedrooms, noOfBeds });

  return (
    <div className="filter-container">
      <span className="filter-label">Rooms and Beds</span>
      <div className="d-flex align-center gap-large">
        <div className="d-flex direction-column gap">
          <span className="span-label">Bedrooms </span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="d-flex direction-column gap">
          <div>
            {numbersOfAmenities.map((number) => (
              <span
                className={`span-label amenity-count align-center justify-center cursor-pointer on-hover ${
                  noOfBedrooms.toString() === number && "selected"
                }`}
                key={number}
                onClick={() => handleBedroomsClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div>
            {numbersOfAmenities.map((number) => (
              <span
                className={`span-label amenity-count align-center justify-center cursor-pointer on-hover ${
                  noOfBeds.toString() === number ? "selected" : ""
                }`}
                key={number}
                onClick={() => handleBedsClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div>
            {numbersOfAmenities.map((number) => (
              <span
                className={`span-label amenity-count align-center justify-center cursor-pointer on-hover ${
                  noOfBathrooms.toString() === number && "selected"
                }`}
                key={number}
                onClick={() => handleBathroomsClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
