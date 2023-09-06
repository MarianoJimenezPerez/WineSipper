import React, { useEffect, useState } from "react";
import logo from "./../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { signin, isAuthenticated, err } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/measurements");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    signin(data);
    setLoading(false);
  });

  return (
    <main className="login">
      <div className="form_container">
        <div className="form_wrapper">
          <div className="logo">
            <img src={logo} alt="Wine sipper" />
          </div>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Type your email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="input__error">Email is required</p>}
            <input
              type="password"
              placeholder="Type your password"
              autoComplete="on"
              {...register("password", { required: true })}
            />
            {errors.username && (
              <p className="input__error">Password is required</p>
            )}
            <button type="submit">
              Sign in <span className={`loading ${loading && "active"}`}></span>
            </button>
          </form>
          {err && (
            <span style={{ color: "#ff0000", margin: "10px 0" }}>
              Something went wrong! Try again in a few seconds
            </span>
          )}
          <p>
            You don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <div className="bk_image"></div>
    </main>
  );
};

export default Home;
