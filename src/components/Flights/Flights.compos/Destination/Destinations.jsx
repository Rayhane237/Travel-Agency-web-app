import React from 'react'
import { useNavigate } from 'react-router-dom';

import Dubai from "../../../../assets/Dubai.jpg";
import albania from "../../../../assets/albania.jpg";
import Paris from "../../../../assets/paris.jpg";
import Moscow from "../../../../assets/Moscow.jpg";
import Brazil from "../../../../assets/Brazil.jpg";
import Taj from "../../../../assets/Taj.jpg";
import tour from "../../../../assets/tour.jpg";
import Sea from "../../../../assets/photo-sea.jpeg";

import './Des.css'

// Single source of truth for every card — add/remove/edit entries here
// and the grid updates automatically, no repeated markup needed.
const destinations = [
  { country: "Paris",   subtitle: "A Paris adventure",       price: 600,   img: Paris   },
  { country: "Albania",  subtitle: "An amazing journey",      price: 1500,  img: albania },
  { country: "Italy",   subtitle: "Monuments in Italy",      price: 350,   img: tour    },
  { country: "Russia",  subtitle: "An amazing journey",      price: 300,   img: Moscow  },
  { country: "India",   subtitle: "Explore the Taj Mahal",   price: 200,   img: Taj     },
  { country: "Dubai",   subtitle: "Explore your taste",      price: 230,   img: Dubai   },
  { country: "Brazil",  subtitle: "Best summer in Brazil",   price: 850,   img: Brazil  },
  { country: "Maldives", subtitle: "A Maldives adventure",    price: 446,   img: Sea     },
];

const Destinations = () => {
  const navigate = useNavigate();

  const navBookFlight = () => {
    navigate("/BookFlight");
  };

  return (
    <div className="destinations-section">
      <div className="destinations-header">
        <div className="top-text">
          <h3>Destinations</h3>
  
        </div>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="destination-card"
            style={{ backgroundImage: `url(${dest.img})` }}
          >
            <div className="card-overlay">
              <div className="card-info">
                <div className="card-title-row">
                  <h3>{dest.country}</h3>
                  <h3 className="price">$ {dest.price.toLocaleString()}</h3>
                </div>
                <p className="subtitle">{dest.subtitle}</p>
              </div>

              <button onClick={navBookFlight} className="f-btn">
                Book flight
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations