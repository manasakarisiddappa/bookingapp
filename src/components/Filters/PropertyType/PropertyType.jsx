import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { PROPERTY_TYPE } from "../../../Slices/filter-slice";

const propertyTypes = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {
  const { propertyType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handlePropertyClick = (type) => {
    dispatch(PROPERTY_TYPE(type));
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex gap-larger">
        {propertyTypes.map(({ id, type }) => (
          <span
            className={`span-label property-type cursor-pointer align-center justify-center on-hover ${
              propertyType === type && "selected"
            }`}
            key={id}
            onClick={() => handlePropertyClick(type)}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
