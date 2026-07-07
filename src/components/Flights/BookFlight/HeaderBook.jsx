import React, { useState } from 'react'
import "./BookFlight.css"
import { useNavigate } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'
import { RiCloseLargeFill } from 'react-icons/ri'
import Payloads from "./Payloads"

// One source of truth for the nav — add/remove/reorder links here,
// no repeated navigate() functions needed.
const navLinks = [
  { label: "Plan", path: "/Plan" },
  { label: "Flights", path: "/Flights" },
  { label: "Hotels", path: "/Hotels" },
  { label: "Discover", path: "/Discover" },
  { label: "About us", path: "/About" },
];

const HeaderBook = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const goTo = (path) => {
    navigate(path)
    setSidebarOpen(false) // close the sidebar so it doesn't sit over the next page
  }

  return (
    <div className='booking-hero'>
      {!sidebarOpen && (
        <button
          className='navbar-toggle-btn'
          onClick={toggleSidebar}
          aria-label="Open menu"
        >
          <IoIosMenu />
        </button>
      )}

      <div className={`navbar-container ${sidebarOpen ? 'open' : ''}`}>
        {sidebarOpen && (
          <button
            className='navbar-close-btn'
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <RiCloseLargeFill />
          </button>
        )}

        <h2>PhnesTravel</h2>

        {navLinks.map((link) => (
          <button
            key={link.path}
            className='navbar-btn'
            onClick={() => goTo(link.path)}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* backdrop dims the page behind the sidebar on mobile and closes it on tap */}
      {sidebarOpen && (
        <div className='sidebar-backdrop' onClick={toggleSidebar} />
      )}

      <div className='text-home'>
        <h3>Booking</h3>
        <h1>Let's get you there</h1>
        <p>Fill in your trip details below and we'll take care of the rest.</p>
      </div>

      <Payloads />
    </div>
  )
}

export default HeaderBook