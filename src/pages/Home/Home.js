import React, { Fragment } from "react";
import { Navbar } from "../../components";
import { HotelCard } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <HotelCard />
      </main>
    </Fragment>
  );
};
