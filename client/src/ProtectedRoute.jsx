import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  if (!isAuthenticated || user === null) return <Navigate to={"/"} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
