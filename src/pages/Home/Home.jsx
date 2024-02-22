import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import { BASEURL } from "../../url";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Navbar,
  HotelCard,
  Categories,
  SearchStayWithDate,
  Filter,
  AuthModal,
} from "../../components";

import {
  getHotelsByPrice,
  getHotelsByRoomsAndBeds,
  getHotelsByPropertyType,
  getHotelsByRating,
  getHotelsByCancelation,
} from "../../utils";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [testData, setTestData] = useState([]);
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useSelector((state) => state.category);
  const { isSearchModalOpen } = useSelector((state) => state.date);
  const { isAuthModalOpen } = useSelector((state) => state.auth);
  const {
    isFilterModalOpen,
    priceRange,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    propertyType,
    traveloRating,
    isCancelable,
  } = useSelector((state) => state.filter);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${BASEURL}/api/hotels?category=${hotelCategory}`
        );
        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 16))
        );
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  const filterHotelByPrice = getHotelsByPrice(hotels, priceRange);
  const filteredHotelsByBedsAndRooms = getHotelsByRoomsAndBeds(
    filterHotelByPrice,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds
  );
  const filterHotelsByPropertyType = getHotelsByPropertyType(
    filteredHotelsByBedsAndRooms,
    propertyType
  );
  const filterHotelsByRating = getHotelsByRating(
    filterHotelsByPropertyType,
    traveloRating
  );

  const filterHotelsByCancelation = getHotelsByCancelation(
    filterHotelsByRating,
    isCancelable
  );

  return (
    <div className="relative">
      <Navbar />
      <Categories />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && <h3 className="alert-text">Loading...</h3>
          }
          endMessage={<p className="alert-text">You have seen it all!</p>}
        >
          <main className="main d-flex align-center wrap gap-larger">
            {filterHotelsByCancelation &&
              filterHotelsByCancelation.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
      {isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};
