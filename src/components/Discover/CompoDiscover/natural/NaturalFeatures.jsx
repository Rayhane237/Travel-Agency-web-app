import React from 'react'

import roses from "../../../../assetsDiscover/roses.jpg"
import lights from "../../../../assetsDiscover/lights.jpg"
import New from "../../../../assetsDiscover/new5.jpg"
import destination from "../../../../assetsDiscover/newziland.jpg"
import snow from "../../../../assetsDiscover/islandof maui.jpg"

import "./Naturalfeatures.css"

// small inline pin icon, no icon library needed
const PinIcon = ({ color = "rgb(220,70,70)" }) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill={color} style={{ flexShrink: 0 }}>
    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
)

const LocationTag = ({ children, onDark = false }) => (
  <span className={`location-tag${onDark ? " on-dark" : ""}`}>
    <PinIcon color={onDark ? "rgb(255,90,90)" : "rgb(220,70,70)"} />
    {children}
  </span>
)

const NaturalFeatures = () => {

  const backLake = {
    backgroundImage: `url(${destination})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: 'clamp(220px, 30vw, 520px)',
    height: 'clamp(170px, 30vw, 480px)',
    marginLeft: "1rem",
    padding: "0.5",
    borderRadius: "13px",
    position: 'relative',
  };

  const backGlacier = {
    backgroundImage: `url(${snow})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: 'clamp(220px, 30vw, 520px)',
    height: 'clamp(170px, 30vw, 480px)',
    marginLeft: "1rem",
    padding: "0.5",
    borderRadius: "13px",
    position: 'relative',
  };

  // NOTE: no dedicated Turks & Caicos / Glacier NP photos exist yet in your
  // assets — `lights` and `roses` are placeholders here. Swap when you have real photos.
  const backMaui = {
    backgroundImage: `url(${snow})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: 'clamp(220px, 26vw, 400px)',
    height: 'clamp(170px, 24vw, 190px)',
    marginLeft: "1rem",
    padding: "0.5",
    borderRadius: "13px",
    position: 'relative',
  };

  const backTurks = {
    backgroundImage: `url(${lights})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: 'clamp(220px, 26vw, 400px)',
    height: 'clamp(170px, 24vw, 190px)',
    marginLeft: "1rem",
    padding: "0.5",
    borderRadius: "13px",
    position: 'relative',
  };

  const backGlacierPark = {
    backgroundImage: `url(${roses})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: 'clamp(220px, 26vw, 400px)',
    height: 'clamp(170px, 24vw, 190px)',
    marginLeft: "1rem",
    padding: "0.5",
    borderRadius: "13px",
    position: 'relative',
  };

  return (
    <div className='body-n'>

      <h2 id='south'>Natural Geographic Features</h2>

      <br />
      <div className='flex-body' id='natural-body'>

        <div className='grid1'>

          <LocationTag>New Zealand</LocationTag>

          <h5>The South Island has 15 named maritime fiords which are all located in
            the southwest of the island in a mountainous area known as Fiordland.
            The spelling 'fiord' is used in New Zealand rather than 'fjord', although
            all the maritime fiords use the word Sound in their name instead.
            A number of lakes in the Fiordland and Otago regions also fill glacial
            valleys. Lake Te Anau has three western arms which are fiords (and are
            named so). Lake McKerrow / Whakatipu Waitai to the north of Milford
            Sound / Piopiotahi is a fiord with a silted-up mouth. Lake Wakatipu
            fills a large glacial valley, as do lakes Hakapoua, Poteriteri, Monowai
            and Hauroko in the far south of Fiordland. Lake Manapouri has fiords as
            its west, north and south arms..</h5>
          <br />

          <div className='natural-pics'>
            <div style={backLake}></div>
            <div style={backGlacier}></div>
          </div>
          <br />
          <h5>Most of New Zealand's glaciers are in the South Island. They are
            generally found in the Southern Alps near the Main Divide.</h5>

          <h5>An inventory of South Island glaciers during the 1980s indicated there
            were about 3,155 glaciers with an area of at least one hectare (2.5
            acres).[60] About a sixth of these glaciers covered more than 10
            hectares. These include the Fox and Franz Josef glaciers on the West
            Coast, and the Haupapa / Tasman, Hooker, Mueller and Murchison glaciers
            in the east.</h5>

        </div>
        
        <div className='grid2' id='body2'>
          <br />
          <div className='other-destinations-header'>
            <h2 style={{ color: "rgba(20, 78, 87, 1)" }}> ___ Other destinations</h2>
            
          </div>

          <div style={backMaui} className='back'>
            <h2>The island of Maui</h2>
            <LocationTag onDark>Hawaii</LocationTag>
            <button className='back-btn'>View more</button>
          </div>

          <div style={backTurks} className='back'>
            <h2>Turks and Caicos Islands</h2>
            <LocationTag onDark>North of Dominican Republic</LocationTag>
            <button className='back-btn'>View more</button>
          </div>

          <div style={backGlacierPark} className='back'>
            <h2>Glacier National Park</h2>
            <LocationTag onDark>Montana</LocationTag>
            <button className='back-btn'>View more</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default NaturalFeatures