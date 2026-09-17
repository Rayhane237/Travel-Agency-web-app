import React, { useState, useEffect } from 'react';
import { getMyFlightBookings, getMyHotelBookings } from '../../api/myBookings';
import Nav from '../nav/nav';
import Footer from '../Footer/Footer';
import './Bookings.css';

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [flightBookings, setFlightBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getMyFlightBookings(), getMyHotelBookings()])
      .then(([flightsRes, hotelsRes]) => {
        setFlightBookings(flightsRes.data.data);
        setHotelBookings(hotelsRes.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const bookingsToShow = activeTab === 'flights' ? flightBookings : hotelBookings;

  return (
    <div>
      <Nav />

      <div className="mybookings-page">
        <h1 className="mybookings-title">My Bookings</h1>

        <div className="mybookings-tabs">
          <button
            className={activeTab === 'flights' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('flights')}
          >
            Flights
          </button>
          <button
            className={activeTab === 'hotels' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('hotels')}
          >
            Hotels
          </button>
        </div>

        <p className="mybookings-count">
          Showing {bookingsToShow.length} {activeTab === 'flights' ? 'flight' : 'hotel'} booking{bookingsToShow.length !== 1 ? 's' : ''}
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : bookingsToShow.length === 0 ? (
          <p className="mybookings-empty">You have no {activeTab} booked yet.</p>
        ) : (
          <div className="mybookings-list">
            {bookingsToShow.map((booking) => (
              <div className="booking-row" key={booking._id}>
                <img
                  src={booking.listing?.image}
                  alt=""
                  className="booking-row-img"
                />
                <div className="booking-row-info">
                  <h3>
                    {activeTab === 'flights'
                      ? booking.listing?.destination
                      : booking.listing?.hotelName}
                  </h3>
                  <p className="booking-row-sub">
                    {activeTab === 'flights'
                      ? `Passenger: ${booking.passenger} — ${new Date(booking.date).toLocaleDateString()}`
                      : `Guest: ${booking.guestName} — ${new Date(booking.checkIn).toLocaleDateString()} to ${new Date(booking.checkOut).toLocaleDateString()}`}
                  </p>
                  <span className="booking-status">Confirmed</span>
                </div>
                <div className="booking-row-price">
                  <span className="price-label">paid</span>
                  <span className="price-value">$ {booking.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyBookings;