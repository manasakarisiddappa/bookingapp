import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Alert,
  AuthModal,
  FinalPrice,
  HotelDetails,
  HotelImages,
  Navbar,
  ProfileDropDown,
  SearchStayWithDate,
} from "../../components";
import "./SingleHotel.css";
import { BASEURL } from "../../url";
import { useSelector } from "react-redux";

export const SingleHotel = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});
  const { isAuthModalOpen, isDropDownModalOpen } = useSelector(
    (state) => state.auth
  );
  const { isSearchModalOpen } = useSelector((state) => state.date);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${BASEURL}/api/hotels/${id}`);
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const { name, state } = singleHotel;

  return (
    <Fragment>
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {name}, {state}
        </p>
        <HotelImages singleHotel={singleHotel} />
        <div className="d-flex">
          <HotelDetails singleHotel={singleHotel} />
          <FinalPrice singleHotel={singleHotel} />
        </div>
      </main>
      {isSearchModalOpen && <SearchStayWithDate />}
      {isDropDownModalOpen && <ProfileDropDown />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
    </Fragment>
  );
};
