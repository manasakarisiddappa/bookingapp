import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer";

const initialState = {
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  destination: "",
  guests: 0,
  isSearchResultOpen: true,
};

const DateContext = createContext(initialState);

const DateProvider = ({ children }) => {
  const [
    {
      destination,
      guests,
      checkInDate,
      isSearchResultOpen,
      checkOutDate,
      isSearchModalOpen,
    },
    dateDispatch,
  ] = useReducer(dateReducer, initialState);
  return (
    <DateContext.Provider
      value={{
        destination,
        guests,
        checkInDate,
        checkOutDate,
        isSearchModalOpen,
        isSearchResultOpen,
        dateDispatch,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
