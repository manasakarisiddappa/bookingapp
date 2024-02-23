import { useDispatch, useSelector } from "react-redux";
import "./HotelCard.css";
import { useNavigate } from "react-router-dom";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from "../../Slices/wishlist-slice";
import { findHotelInWishlist } from "../../utils";
import { SHOW_AUTH_MODAL } from "../../Slices/auth-slice";
import { useAlert } from "../../context/alert-context";

export const HotelCard = ({ hotel }) => {
  const { _id, name, image, address, state, rating, price } = hotel;
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { accessToken } = useSelector((state) => state.auth);
  const IsHotelInWishlist = findHotelInWishlist(wishlist, _id);
  const { setAlert } = useAlert();

  const navigate = useNavigate();

  const handleHotelCardClick = () => {
    navigate(`/hotels/${name}/${address}/${state}/${_id}/reserve`);
  };

  const handleWishlistClick = () => {
    if (accessToken) {
      if (!IsHotelInWishlist) {
        dispatch(ADD_TO_WISHLIST(hotel));
        setAlert({
          open: true,
          message: `Hotel:: ${name} added to wishlist`,
          type: "success",
        });
      } else {
        dispatch(REMOVE_FROM_WISHLIST(_id));
        setAlert({
          open: true,
          message: `Hotel:: ${name} removed from wishlist`,
          type: "success",
        });
      }
    } else {
      dispatch(SHOW_AUTH_MODAL());
    }
  };

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelCardClick}>
        <img src={image} alt={name} className="img" />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {address}, {state}
            </span>
            <span className="rating d-flex align-center"></span>
            <span class="material-icons-outlined">star</span>
            <span>{rating}</span>
          </div>

          <p className="hotel-name">{name}</p>
          <p className="price-details">
            <span className="price">Rs. {price}</span>
            <span>night</span>
          </p>
        </div>
      </div>
      <button
        className="button btn-wishlist absolute"
        onClick={handleWishlistClick}
      >
        <span
          class={`material-icons favourite cursor ${
            IsHotelInWishlist && "favselected"
          }`}
        >
          favorite
        </span>
      </button>
    </div>
  );
};
