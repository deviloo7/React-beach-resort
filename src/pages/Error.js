import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <Hero>
      <Banner title={"404 not found"} subtitle={"page not found"}>
        <Link to="/">
          <button type="button" className="btn-primary">
            Return
          </button>
        </Link>
      </Banner>
    </Hero>
  );
}
