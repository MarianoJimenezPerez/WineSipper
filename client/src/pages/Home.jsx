import React, { useState } from "react";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <main className="login">
      <div className="form_container">
        <div className="form_wrapper">
          <div className="logo">
            <img src={logo} alt="Wine sipper" />
          </div>
          <form>
            <input type="email" placeholder="Type your email" />
            <input type="password" placeholder="Type your password" autoComplete="on"/>
            <button>
              Sign in <span className={`loading ${loading && "active"}`}></span>
            </button>
          </form>
          {err && (
            <span style={{ color: "#ff0000", margin: "10px 0" }}>
              Something went wrong! Try again in a few seconds
            </span>
          )}
          <p>
            You don't have an account?{" "}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="bk_image"></div>
    </main>
  );
};

export default Home;
