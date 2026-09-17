import api from "../API/axios" ;

export const getMyFlightBookings = () => api.get("/bookFlight");
export const getMyHotelBookings = () => api.get("/bookHotel");