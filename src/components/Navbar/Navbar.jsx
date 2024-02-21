import React from "react";
import "./Navbar.css";
import { useAuth } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_SEARCH_MODAL } from "../../Slices/date-slice";

export const Navbar = () => {
  const { destination, checkInDate, checkOutDate, guests, isSearchModalOpen } =
    useSelector((state) => state.date);
  const { authDispatch } = useAuth();
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(TOGGLE_SEARCH_MODAL());
  };

  const handleAuthClick = () => {
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };

  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <a className="link" href="/">
          TravelO
        </a>
      </h1>

      <div
        className="form-container d-flex align-center cursor-pointer shadow"
        onClick={handleSearchClick}
      >
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkInDate && checkOutDate
            ? `${checkInDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })} - ${checkOutDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}`
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {guests > 0 ? `${guests} guests` : "Add Guests"}
        </span>
        <span className="search material-icons-outlined">search</span>
      </div>
      <nav className="d-flex align-center gap-large" onClick={handleAuthClick}>
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-icons-outlined profile-option menu">
            menu
          </span>
          <span className="material-icons-outlined profile-option person">
            person_2
          </span>
        </div>
      </nav>
    </header>
  );
};
