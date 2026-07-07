import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

// Single source of truth for every column. Add/remove/reorder entries here —
// no JSX or CSS ordering hacks needed, the layout just follows this array.
const footerColumns = [
  {
    title: "Links",
    items: [
      { label: "Flights", to: "/Flights" },
      { label: "Stays", to: "/Stays" },
      { label: "Discover", to: "/Discover" },
      { label: "About Us", to: "/AboutUs" },
      { label: "Contact", to: "/Contact" },
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

export default Footer