import React from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { signout } = useAuth();
  return (
    <header className="header">
      <div className="container">
        <nav>
          <Link to={"/measurements"}>
            <img src={logo} alt="Wine sipper" />
          </Link>
          <button className="btn btn__secondary" onClick={signout}>
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
