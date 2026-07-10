import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'
import { RiCloseLargeFill } from 'react-icons/ri'
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
  const [navHeight, setNavHeight] = useState(0)
  const navRef = useRef(null)

  const toggleMenu = () => setMenuOpen((v) => !v)
  const closeMenu = () => setMenuOpen(false)

  const navigate = useNavigate()
  const location = useLocation()

  const go = (path) => {
    navigate(path)
    closeMenu()
  }

  // Measure the actual rendered height of the fixed nav so the spacer
  // below it always matches exactly, even if padding/logo size changes.
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Lock page scroll while the mobile menu is open, and allow Escape to close it
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <nav ref={navRef} className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className='navbar-inner'>

          <button
            className='navbar-toggle'
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <RiCloseLargeFill /> : <IoIosMenu />}
          </button>

          <div className='navbar-logo' onClick={() => go("/")}>
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

          <div
            id="primary-navigation"
            className={`navbar-links ${menuOpen ? 'open' : ''}`}
          >
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

        <div
          className={`navbar-backdrop ${menuOpen ? 'visible' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
      </nav>

      {/* Reserves the space the fixed navbar no longer takes up in normal flow */}
      <div className='navbar-spacer' style={{ height: navHeight }} />
    </>
  )
}

export default NavBar