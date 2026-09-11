import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"


const footerColumns = [
  {
    title: "Links",
    items: [
      { label: "Flights", to: "/Flights" },
      { label: "Stays", to: "/Stays" },
      { label: "Discover", to: "/Discover" },
      { label: "About Us", to: "/AboutUs" },
      { label: "Contact", to: "/Contact" },
      { label: "AD.DBO", href: "https://admin-dash-board-travels.vercel.app" },
    ],
  },
  {
    title: "Our Activities",
    items: [
      { label: "Kayaking", to: "/Kayaking" },
      { label: "Cruising & Sailing", to: "/Cruising" },
    ],
  },
  {
    title: "About Us",
    items: [
      { label: "Our Story", to: "/OurStory" },
      { label: "Work with us", to: "/Careers" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Address: Holandia", text: true },
      { label: "Millennium City, PH17", text: true },
      { label: "Phone: 023 456 7890", text: true },
      { label: "Email: phnes.travels@gmail.com", text: true },
      { label: "Maps: Millennium City, Accra", text: true },
    ],
  },
];

const Footer = () => {
  return (
    <div className='footer-plan'>
      <div className='footer-container-plan'>
        {footerColumns.map((column, i) => (
          <div className='footer-item-s' key={i}>
            <h5>{column.title}</h5>
            {column.items.map((item, j) =>
              item.to ? (
                <Link to={item.to} className='footer-link' key={j}>
                  {item.label}
                </Link>
              ) : item.href ? (
                
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='footer-link'
                  key={j}
                >
                  {item.label}
                </a>
              ) : (
                <p className='footer-text' key={j}>{item.label}</p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  )
};

export default Footer;