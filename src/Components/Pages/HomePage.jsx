import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import FlightBooking from "../Booking/FlightBooking";
import PackageHeading from "../PackageHeading/PackageHeading";
import PackageType from "../PackageType/PackageType";
import CardContainer from "../Card/CardContainer";
import Footer from "../Footer/Footer";
import Island from "../Island/Island";
import IslandCardContainer from "../IslandCardContainer/IslandCardContainer";



const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <FlightBooking />
      <PackageHeading />
      <PackageType />
      <CardContainer />
      <Island />
      <IslandCardContainer />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
