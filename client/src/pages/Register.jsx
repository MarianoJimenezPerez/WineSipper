import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { signup, isAuthenticated, err } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate("/measurements");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <main className="register">
      <div className="form_container">
        <div className="form_wrapper">
          <span className="title">Register</span>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Type your name"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <p className="input__error">Username is required</p>
            )}
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
            {errors.password && (
              <p className="input__error">Password is required</p>
            )}
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
