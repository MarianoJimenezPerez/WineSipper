import { createContext, useContext, useEffect, useState } from "react";
import {
  createMeasurementRequest,
  getMeasurementsRequest,
} from "../api/measurements";

export const MeasurementContext = createContext();

export const useMeasurement = () => {
  const context = useContext(MeasurementContext);

  if (!context) {
    throw new Error("useMeasurement must be used within a MeasurementProvider");
  }
  return context;
};

export const MeasurementProvider = ({ children }) => {
  const [measurements, setMeasurements] = useState([]);
  const [addingMeasurement, setAddingMeasurement] = useState(false);
  const [error, setError] = useState(false);

  const getMeasurements = async () => {
    try {
      const res = await getMeasurementsRequest();
      setMeasurements(res.data.measurements);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const createMeasurement = async (measurement) => {
    try {
      setAddingMeasurement(true);
      const res = await createMeasurementRequest(measurement);
      setMeasurements((prevMeasurements) => [
        ...prevMeasurements,
        res.data.measurement,
      ]);
      setAddingMeasurement(false);
    } catch (error) {
      console.error(error);
      setAddingMeasurement(false);
    }
  };

  useEffect(() => {
    getMeasurements();
  }, []);

  return (
    <MeasurementContext.Provider
      value={{
        measurements,
        createMeasurement,
        getMeasurements,
        addingMeasurement,
      }}
    >
      {children}
    </MeasurementContext.Provider>
  );
};
