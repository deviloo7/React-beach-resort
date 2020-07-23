import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {
    isOpen: false,
  };
  constructor() {
    super();
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.isOpen);
  };
  set1 = () => {
    if (this.state.isOpen) return "nav-link show";
    else return "nav-link";
  };
  render() {
    return (
      <nav className="navb">
        <div className="logo">
          <Link to="/">
            <img className="img" src={logo} />
          </Link>
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaAlignRight />
          </button>
        </div>
        <div className={this.set1()}>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/rooms">
              <li>Rooms</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
