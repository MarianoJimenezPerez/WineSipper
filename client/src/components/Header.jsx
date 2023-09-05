import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <Link to={"/measurements"}>
            <img src={logo} alt="Wine sipper" />
          </Link>
          <button className="btn btn__secondary">Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
