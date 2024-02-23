import "./ProfileDropDown.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  CLEAR_CREDENTIALS,
  CLEAR_USER_DATA,
  SHOW_DROP_DOWN_OPTIONS,
} from "../../Slices/auth-slice";
import { CLEAR_INPUTS } from "../../Slices/date-slice";
import { CLEAR_ALL } from "../../Slices/filter-slice";
import { CLEAR_WISHLIST } from "../../Slices/wishlist-slice";
import { useAlert } from "../../context/alert-context";

export const ProfileDropDown = () => {
  const dispatch = useDispatch();

  const { setAlert } = useAlert();

  const navigate = useNavigate();

  const handleWishlistClick = () => {
    dispatch(SHOW_DROP_DOWN_OPTIONS());
    navigate("/wishlist");
  };

  const handleLogoutClick = () => {
    dispatch(CLEAR_USER_DATA());
    dispatch(CLEAR_CREDENTIALS());
    dispatch(SHOW_DROP_DOWN_OPTIONS());
    dispatch(CLEAR_INPUTS());
    dispatch(CLEAR_ALL());
    dispatch(CLEAR_WISHLIST());

    navigate("/");
    setAlert({
      open: true,
      message: "Logged out successfully",
      type: "success",
    });
  };

  console.log("from profile");

  return (
    <div className="drop-down-container shadow d-flex direction-column absolute">
      <span
        className="option-span wishlist-span cursor-pointer d-flex align-center gap-small"
        onClick={handleWishlistClick}
      >
        <span class="material-icons-outlined">favorite_border</span>
        Wishlist
      </span>
      <span
        className="option-span logout cursor-pointer d-flex align-center gap-small"
        onClick={handleLogoutClick}
      >
        <span class="material-icons-outlined">logout</span>
        Logout
      </span>
    </div>
  );
};
