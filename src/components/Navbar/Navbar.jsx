import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_SEARCH_MODAL } from "../../Slices/date-slice";
import {
  SHOW_AUTH_MODAL,
  SHOW_DROP_DOWN_OPTIONS,
} from "../../Slices/auth-slice";
import { Link } from "react-router-dom";

export const Navbar = ({ route }) => {
  const { destination, checkInDate, checkOutDate, guests, isSearchModalOpen } =
    useSelector((state) => state.date);
  const { accessToken, name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(TOGGLE_SEARCH_MODAL());
  };

  const handleAuthClick = () => {
    if (accessToken) {
      dispatch(SHOW_DROP_DOWN_OPTIONS());
      console.log("inside nav bar");
    } else {
      dispatch(SHOW_AUTH_MODAL());
    }
  };

  console.log(name, "user");

  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <Link className="link" to="/">
          TravelO
        </Link>
      </h1>
      {route !== "wishlist" && (
        <div
          className="form-container d-flex align-center cursor-pointer shadow"
          onClick={handleSearchClick}
        >
          <span className="form-option">
            {route === "home" ? "Any Where" : destination || "Any Where"}
          </span>
          <span className="border-right-1px"></span>
          <span className="form-option">
            {checkInDate && checkOutDate && route !== "home"
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
            {route !== "home" && guests > 0 ? `${guests} guests` : "Add Guests"}
          </span>
          <span className="search material-icons-outlined">search</span>
        </div>
      )}

      <nav className="d-flex align-center gap-large" onClick={handleAuthClick}>
        {accessToken && <span className="user">Hi Manasa </span>}
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
