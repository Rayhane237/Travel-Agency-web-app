import React from 'react'
import { useNavigate } from 'react-router-dom'

// Swap these for your actual asset filenames/paths
import bajaRoad from "../../../../assets/blue-sky.jpg";
import bajaPool from "../../../../assets/Hotel.jpg";

import './Kay.css'

const Kayaking = () => {
  const navigate = useNavigate()
  const navBookFlight = () => {
    navigate("/BookFlight")
  }

  return (
    <div className='f-body'>
      <div className='f-top-text'>
        <div>
          <h3>Kayaking</h3>
          <h2>Discover your love</h2>
        </div>
      
      </div>

      <div className='kayaking-container-f'>

        <div className='kayaking-item-f'>
          <div className='baja'>
            <h2>Kayaking in Baja California</h2>
            <div className='baja-price'>
              <span>From</span>
              <h3>$600</h3>
            </div>
          </div>

          <h5>
            Adventure cruising is more than a growing trend to connect with nature, wildlife, and
            yourself. It’s a community a adventurers that is here to stay. With luxurious
            accommodations and unmatched scenery, our Baja kayaking is the perfect escape.
          </h5>

          <button onClick={navBookFlight} className='baja-btn'>Book flight</button>
        </div>

        <div className='kayaking-images-f'>
          <div
            className='kayaking-img'
            style={{ backgroundImage: `url(${bajaRoad})` }}
          />
          <div
            className='kayaking-img'
            style={{ backgroundImage: `url(${bajaPool})` }}
          />
        </div>

      </div>
    </div>
  )
}

export default Kayaking