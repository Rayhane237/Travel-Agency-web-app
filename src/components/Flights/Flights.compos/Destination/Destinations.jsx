import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getFlightListings } from '../../../../API/flightListing';

import './Des.css'

const Destinations = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFlightListings()
      .then((res) => setDestinations(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  const navBookFlight = (listingId) => {
    navigate("/BookFlight", { state: { listingId } });
  };

  if (loading) return null;

  return (
    <div className="destinations-section">
      <div className="destinations-header">
        <div className="top-text">
          <h3>Destinations</h3>
        </div>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div
            key={dest._id}
            className="destination-card"
            style={{ backgroundImage: `url(${dest.image})` }}
          >
            {!dest.isActive && (
              <div className="sold-out-badge">Sold Out</div>
            )}
            <div className="card-overlay">
              <div className="card-info">
                <div className="card-title-row">
                  <h3>{dest.destination}</h3>
                  <h3 className="price">$ {dest.price.toLocaleString()}</h3>
                </div>
                <p className="subtitle">{dest.description}</p>
              </div>

              <button
                onClick={() => navBookFlight(dest._id)}
                className="f-btn"
                disabled={!dest.isActive}
              >
                {dest.isActive ? "Book flight" : "Sold Out"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations