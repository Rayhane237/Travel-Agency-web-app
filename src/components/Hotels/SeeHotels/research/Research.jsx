import React from 'react'
import search from "../../../../assetsHotel/bora.jpg"
import Sea from "../../../../assetsHotel/bora2.jpg"
import sear from "../../../../assetsHotel/photo-beach.jpeg"
import SEARCH3 from "../../../../assetsHotel/SEARCH3.jpg"
import './research.css'

const recentSearches = [
  { id: 1, img: search, title: "Bora Bora", places: 305 },
  { id: 2, img: Sea, title: "London, UK", places: 315 },
  { id: 3, img: sear, title: "Malé, Maldives", places: 300 },
  { id: 4, img: SEARCH3, title: "Sydney, Australia", places: 225 },
]

const Research = () => {
  return (
    <div className="research">
      <h2 className="research-title">Recent searches</h2>

      <div className="research-grid">
        {recentSearches.map((item) => (
          <div className="search-card" key={item.id}>
            <img className="search-thumb" src={item.img} alt={item.title} />
            <div className="search-info">
              <h4 className="search-city">{item.title}</h4>
              <p className="search-count">{item.places} places</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Research