import axios from "axios";
const API_URL = "http://localhost:8000/api/auth/";

export const registerService = (credentials) => {
  return axios.post(`${API_URL}register`, credentials);
};
export const loginService = (credentials) => {
  return axios.post(`${API_URL}login`, credentials, {
    withCredentials: true, // This ensures that cookies are sent and received
  });
};

export const logoutService = () =>
  axios.post(
    `${API_URL}logout`,
    {},
    {
      withCredentials: true, // This ensures that cookies are sent and received
    }
  );
