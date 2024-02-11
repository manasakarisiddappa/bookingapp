import { Fragment, useEffect, useState } from "react";
import { HotelCard, Navbar } from "../../components";
import { useCategory, useDate } from "../../context";
import axios from "axios";

export const SearchResults = () => {
  const { destination } = useDate();
  const [hotels, SetHotels] = useState([]);
  const { hotelCategory } = useCategory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://airbnbtravelapp.cyclic.app/api/hotels?category=${hotelCategory}`
        );
        SetHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const filteredSearchResults = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase() === destination.toLowerCase() ||
      city.toLowerCase() === destination.toLowerCase() ||
      state.toLowerCase() === destination.toLowerCase()
  );

  return (
    <Fragment>
      <Navbar />
      <section className="main d-flex align-center gap-larger">
        {filteredSearchResults ? (
          filteredSearchResults.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))
        ) : (
          <h3>Nothing found</h3>
        )}
      </section>
    </Fragment>
  );
};
