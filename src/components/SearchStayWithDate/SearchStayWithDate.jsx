import React, { useEffect, useState } from "react";
import axios from "axios";
import { DateSelector } from "../DateSelector/DateSelector";
import "./SearchStayWithDate.css";
import {
  DESTINATION,
  TOGGLE_SEARCH_MODAL,
  GUESTS,
  SHOW_SEARCH_RESULT,
} from "../../Slices/date-slice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../url";

export const SearchStayWithDate = () => {
  const { destination, guests, isSearchResultOpen } = useSelector(
    (state) => state.date
  );
  const dispatch = useDispatch();

  const { hotelCategory } = useSelector((state) => state.category);
  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${BASEURL}/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const handleDestinationChange = (event) => {
    dispatch(DESTINATION(event.target.value));
  };

  const handleGuestChange = (event) => {
    dispatch(GUESTS(event.target.value));
  };

  const handleSearchResultClick = (address) => {
    dispatch(DESTINATION(address));
  };

  const handleSearchButtonClick = () => {
    dispatch(TOGGLE_SEARCH_MODAL());
    navigate(`/hotels/${destination}`);
  };

  const destinationOptions = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );

  const handleDestinationFocus = () => {
    dispatch(SHOW_SEARCH_RESULT());
  };

  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center absolute">
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            autoFocus
            onFocus={handleDestinationFocus}
            onChange={handleDestinationChange}
            className="input search-dest"
            placeholder="search destination"
          />
        </div>
        <div className="location-container">
          <label className="label">Check In</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="location-container">
          <label className="label">Check out</label>
          <DateSelector checkInType="out" />
        </div>
        <div className="location-container">
          <label className="label">No. of Guests</label>
          <input
            value={guests}
            className="input search-dest"
            placeholder="Add guests"
            onChange={handleGuestChange}
          />
        </div>
        <div
          className="search-container d-flex align-center cursor"
          onClick={handleSearchButtonClick}
        >
          <span className="material-icons-outlined">search</span>
          <span>Search</span>
        </div>
      </div>
      {isSearchResultOpen && (
        <div className="search-result-container absolute">
          {destinationOptions &&
            destinationOptions.map(({ address, city }) => (
              <p
                className="p cursor-pointer"
                onClick={() => handleSearchResultClick(address)}
              >
                {address} , {city}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};
