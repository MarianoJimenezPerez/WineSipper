import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <main className="register">
      <div className="form_container">
        <div className="form_wrapper">
          <span className="title">Register</span>
          <form>
            <input type="text" placeholder="Type your name" />
            <input type="email" placeholder="Type your email" />
            <input type="password" placeholder="Type your password" autoComplete="on"/>
            <button>
              Sign up <span className={`loading ${loading && "active"}`}></span>
            </button>
            {err && (
              <span style={{ color: "#ff0000", margin: "10px 0" }}>
                Something went wrong! Try again in a few seconds
              </span>
            )}
          </form>
          <p>
            Do you have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
      <div className="bk_image"></div>
    </main>
  );
};

export default Register;
