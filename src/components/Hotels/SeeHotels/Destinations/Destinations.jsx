import React from 'react'
import { useNavigate } from 'react-router-dom'

import Hotel from "../../../../assetsHotel/hilton.jpg"
import Hotel1 from "../../../../assetsHotel/hilton2.jpg"
import Hotel2 from "../../../../assetsHotel/hotel1.jpg"
import Hotel3 from "../../../../assetsHotel/hotel5.jpg"
import Hotel4 from "../../../../assetsHotel/hotel7.jpg"
import Hotel5 from "../../../../assetsHotel/hotel8.jpg"
import Hotel6 from "../../../../assetsHotel/bora.jpg"
import Hotel7 from "../../../../assetsHotel/hotels.jpg"

import './DesHotel.css'

// One entry per card — add/remove/reorder here, the grid updates itself.
const destinations = [
  { place: "Paris",         tagline: "A Paris Adventure",  price: 160, img: Hotel },
  { place: "Dubai",         tagline: "An amazing journey", price: 230, img: Hotel1 },
  { place: "Rome",          tagline: "Explore your taste", price: 180, img: Hotel2 },
  { place: "St Lucia",      tagline: "An amazing journey", price: 146, img: Hotel3 },
  { place: "Accra, Ghana",  tagline: "Explore your taste", price: 80,  img: Hotel4 },
  { place: "Maldives",      tagline: "Explore your taste", price: 150, img: Hotel5 },
  { place: "Bali",          tagline: "An amazing journey", price: 270, img: Hotel6 },
  { place: "Abuja, Nigeria",tagline: "An amazing journey", price: 157, img: Hotel7 },
];

const Destinations = () => {
  const navigate = useNavigate()
  const navBookFlight = () => {
    navigate("/BookFlight")
  }

  return (
    <div className='dh-section'>
      <div className='dh-header'>
        <div>
          <p className='dh-eyebrow'>Hotels</p>
          <h1 className='dh-title'>Discover your love</h1>
        </div>
        <button className='dh-see-all'>See all</button>
      </div>

      <div className='dh-grid'>
        {destinations.map((item, index) => (
          <div className='dh-card' key={index}>
            <div
              className='dh-image'
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className='dh-price'>$ {item.price}</div>
              <div className='dh-overlay'>
                <h3 className='dh-place'>{item.place}</h3>
                <p className='dh-tagline'>{item.tagline}</p>
              </div>
            </div>
            <button onClick={navBookFlight} className='dh-book-btn'>Book hotel</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations