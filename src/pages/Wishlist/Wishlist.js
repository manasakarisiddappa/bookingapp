import { Fragment } from "react";
import {
  Navbar,
  HotelCard,
  ProfileDropDown,
  AuthModal,
  Alert,
} from "../../components";
import { useSelector } from "react-redux";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const auth = useSelector((state) => state.auth);
  const { isAuthModalOpen, isDropDownModalOpen } = useSelector(
    (state) => state.auth
  );

  return (
    <Fragment>
      <Navbar route="wishlist" />
      <h3 className="heading-2">Your wishlist</h3>
      <section className="wishlist-page d-flex align-center wrap gap-larger">
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
    </Fragment>
  );
};
