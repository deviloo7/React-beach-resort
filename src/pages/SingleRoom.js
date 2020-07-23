import React, { Component } from "react";
import { RoomContext } from "../Context";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>Rooma cannot br found...</h3>
          <Link to="/rooms" className="btn-primary">
            Return
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item}></img>;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3> Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>price : ${size} SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people ` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets are allowed" : "no peta are allowed"}</h6>
              <h6>{breakfast ? "free breakfast" : null}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
