import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'
import { RiCloseLargeFill } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'
import "./nav.css"

const links = [
  { label: "Home", path: "/" },
  { label: "Flights", path: "/Flights" },
  { label: "Hotels", path: "/Hotels" },
  { label: "Discover", path: "/Discover" },
  { label: "About Us", path: "/About" },
  { label: "Contact", path: "/Contact" },
]

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navigate = useNavigate()
  const location = useLocation()

  const go = (path) => {
    navigate(path)
    closeMenu()
  }

  // Placeholder user data — wire this up to your real auth state later
  const user = { name: "Ann Pine", initials: "AP" }

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className='navbar-inner'>

        <button className='navbar-toggle' color="black" onClick={toggleMenu}>
          {menuOpen ? <RiCloseLargeFill /> : <IoIosMenu />}
        </button>

        <div className='navbar-logo'   onClick={() => go("/")}>
          <svg viewBox="0 0 130 30" className='logo-path' aria-hidden="true">
            <path
              d="M3 22 C 24 3, 90 3, 113 16"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.3"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
            <text x="0" y="0" className='logo-plane' transform="translate(113 16) rotate(-16)">✈</text>
          </svg>
          <span className='logo-text'>Phnes.<em>Travels</em></span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <button
              key={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => go(link.path)}
            >
              {link.label}
            </button>
          ))}

          <div className='navbar-actions'>
            <button className='btn-login' onClick={() => go("/Login")}>Login</button>
            <button className='btn-signup' onClick={() => go("/Signup")}>Sign up</button>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default NavBar