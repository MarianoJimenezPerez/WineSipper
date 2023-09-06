import axios from "./../config/axios.js";

export const getMeasurementsRequest = () => axios.get(`/measurements`);

export const createMeasurementRequest = (measurement) =>
  axios.post(`/measurements/add`, measurement);
