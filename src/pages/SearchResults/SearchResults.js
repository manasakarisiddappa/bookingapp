import { Fragment, useEffect, useState } from "react";
import { HotelCard, Navbar } from "../../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASEURL } from "../../url";

export const SearchResults = () => {
  const { destination } = useSelector((state) => state.date);
  const [hotels, SetHotels] = useState([]);
  const { hotelCategory } = useSelector((state) => state.category);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${BASEURL}/api/hotels?category=${hotelCategory}`
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
