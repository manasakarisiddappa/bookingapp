import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const intialValue = {
  isFilterModalOpen: false,
  priceRange: [300, 20000],
  noOfBathrooms: "Any",
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  propertyType: "Any",
  traveloRating: 1,
  isCancelable: true,
};

const FilterContext = createContext(intialValue);

const FilterProvider = ({ children }) => {
  const [
    {
      isFilterModalOpen,
      propertyType,
      priceRange,
      noOfBathrooms,
      noOfBedrooms,
      noOfBeds,
      traveloRating,
      isCancelable,
    },
    filterDispatch,
  ] = useReducer(filterReducer, intialValue);
  return (
    <FilterContext.Provider
      value={{
        noOfBedrooms,
        noOfBeds,
        noOfBathrooms,
        isFilterModalOpen,
        priceRange,
        propertyType,
        traveloRating,
        isCancelable,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
