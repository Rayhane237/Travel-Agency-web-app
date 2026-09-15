import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHotelListings } from '../../../../api/hotelListing'

import './DesHotel.css'

const Destinations = () => {
  const navigate = useNavigate()
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHotelListings()
      .then((res) => setDestinations(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  const navBookHotel = (listingId) => {
    navigate("/BookHotel", { state: { listingId } });
  }

  if (loading) return null; // or a spinner, once you have one

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
        {destinations.map((item) => (
          <div className='dh-card' key={item._id}>
            <div
              className='dh-image'
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className='dh-price'>$ {item.price}</div>
              <div className='dh-overlay'>
                <h3 className='dh-place'>{item.hotelName}</h3>
                <p className='dh-tagline'>{item.description}</p>
              </div>
            </div>
            <button onClick={() => navBookHotel(item._id)} className='dh-book-btn'>Book hotel</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations