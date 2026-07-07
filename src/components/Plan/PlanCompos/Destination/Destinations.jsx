import { LuMapPin } from 'react-icons/lu';
import "./Destinations.css";

// Images
import Dubai from "../../../../assets/Dubai.jpg";
import Turkey from "../../../../assets/Turkey.jpg";
import albania from "../../../../assets/albania.jpg";
import paris from "../../../../assets/paris.jpg";
import Moscow from "../../../../assets/Moscow.jpg";
import Brazil from "../../../../assets/Brazil.jpg";
import italy from "../../../../assets/italy.jpg";
import Taj from "../../../../assets/Taj.jpg";
import Egypt from "../../../../assets/Egypt.jpg";
import old from "../../../../assets/old.jpg";

const destinations = [
  { img: Dubai, name: "Dubai", country: "UAE", travelers: 14 },
  { img: Turkey, name: "Turkey", country: "Türkiye", travelers: 11 },
  { img: albania, name: "Albania", country: "Albania", travelers: 6 },
  { img: paris, name: "Paris", country: "France", travelers: 22 },
  { img: Moscow, name: "Moscow", country: "Russia", travelers: 9 },
  { img: Brazil, name: "Brazil", country: "Brazil", travelers: 17 },
  { img: italy, name: "Italy", country: "Italy", travelers: 19 },
  { img: Taj, name: "Taj Mahal", country: "India", travelers: 15 },
  { img: Egypt, name: "Egypt", country: "Egypt", travelers: 13 },
  { img: old, name: "Singapore", country: "Singapore", travelers: 10 },
];

const AVATAR_COLORS = ["#1f7a67", "#0d9488", "#14b8a6"];
const AVATARS_SHOWN = 3;

const TopDestinations = () => {
  return (
    <section className="scroll-wrapper">
      <div className="scroll-header">
        <div>
          <h4>Top destinations</h4>
          <h1>Discover your love</h1>
        </div>
        <button className="see-all-btn">See all</button>
      </div>

      <div className="group">
        {destinations.map((place) => {
          const extra = place.travelers - AVATARS_SHOWN;

          return (
            <div className="destination" key={place.name}>
              <img src={place.img} alt={place.name} />

              <div className="destination-body">
                <div className="destination-text">
                  <h5>{place.name}</h5>
                  <p className="destination-location">
                    <LuMapPin size={14} />
                    {place.country}
                  </p>
                </div>

                <div className="avatar-stack">
                  {Array.from({ length: AVATARS_SHOWN }).map((_, i) => (
                    <span
                      className="avatar"
                      key={i}
                      style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                    >
                      {place.name[i]?.toUpperCase()}
                    </span>
                  ))}
                  {extra > 0 && <span className="avatar avatar-extra">+{extra}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopDestinations;