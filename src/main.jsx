import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Plan from './components/Plan/Plan.jsx'
import Flights from './components/Flights/Flights.jsx'
import BookFlight from "./components/Flights/BookFlight/Payloads.jsx"
import Hotels from './components/Hotels/Hotels.jsx'
import BookHotel from './components/Hotels/SeeHotels/BookHotels/HotelPayloads.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/ContacUs/contactUs.jsx'
import Discover from "./components/Discover/Discover.jsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Plan />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Flights",
    element: <Flights />,
  },
  {
    path: "/BookFlight",
    element: <BookFlight />,
  },
  {
    path: "/BookHotel",
    element: <BookHotel />,
  },
  {
    path: "/Hotels",
    element: <Hotels />,
  },
  {
    path: "/Discover",
    element: <Discover />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
) 