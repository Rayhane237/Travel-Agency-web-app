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

  if (loading) return null;

  return (
    <div className="destinations-section">
      <div className="destinations-header">
        <div className="top-text">
          <h3>Hotels</h3>
        </div>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="destinations-grid">
        {destinations.map((item) => (
          <div
            key={item._id}
            className="destination-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {!item.isActive && (
              <div className="sold-out-badge">Sold Out</div>
            )}
            <div className="card-overlay">
              <div className="card-info">
                <div className="card-title-row">
                  <h3>{item.hotelName}</h3>
                  <h3 className="price">$ {item.price.toLocaleString()}</h3>
                </div>
                <p className="subtitle">{item.description}</p>
              </div>

              <button
                onClick={() => navBookHotel(item._id)}
                className="f-btn"
                disabled={!item.isActive}
              >
                {item.isActive ? "Book hotel" : "Sold Out"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations