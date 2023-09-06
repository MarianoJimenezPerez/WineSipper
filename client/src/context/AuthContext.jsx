import { createContext, useContext, useEffect, useState } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [err, setErr] = useState(false);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error.response);
      setErr(true);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error.response);
      setErr(true);
    }
  };

  const signout = async (user) => {
    try {
      const res = await logoutRequest();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error.response);
      setErr(true);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const checkCookieAuth = async () => {
      const cookies = Cookies.get();

      if (!cookies.authToken) {
        setIsAuthenticated(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.authToken);
        if (!res.data) return setIsAuthenticated(false);

        setIsAuthenticated(true);
        setUser(res.data);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkCookieAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin, user, isAuthenticated, err, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
