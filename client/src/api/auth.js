import axios from "./../config/axios";

export const registerRequest = (user) => axios.post(`/auth/registry`, user);

export const loginRequest = (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = (user) => axios.get(`/auth/verify`);
