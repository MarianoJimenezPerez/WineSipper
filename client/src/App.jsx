import React from "react";
import "./styles/index.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Measurements from "./pages/Measurements";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { MeasurementProvider } from "./context/MeasurementsContext";

const App = () => {
  return (
    <AuthProvider>
      <MeasurementProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/measurements" element={<Measurements />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MeasurementProvider>
    </AuthProvider>
  );
};

export default App;
