
import axios from "axios";

export const getFlightListings = () =>
  axios.get(`${import.meta.env.VITE_SERVER_HOST}/flightListings`);