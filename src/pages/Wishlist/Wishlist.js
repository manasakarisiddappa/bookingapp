import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components";
import { useSelector } from "react-redux";
import "./Wishlist.css";

export const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  console.log(wishlist);
  return (
    <Fragment>
      <Navbar />
      <h2 className="heading-2">Your wishlist</h2>
      <section className="wishlist-page d-flex align-center wrap gap-larger">
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
    </Fragment>
  );
};
