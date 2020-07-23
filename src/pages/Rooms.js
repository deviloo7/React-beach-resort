import React from "react";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
export const Rooms = () => {
  return (
    <>
      <Hero hero="rooms">
        <Banner title={"our rooms"}>
          <Link to="/">
            <button className="btn-primary">Return home</button>
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};
export default Rooms;
