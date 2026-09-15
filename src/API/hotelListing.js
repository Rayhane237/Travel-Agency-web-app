// src/api/hotelListing.js
import axios from "axios";

export const getHotelListings = () =>
  axios.get(`${import.meta.env.VITE_SERVER_HOST}/hotelListings`);