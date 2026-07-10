import React from 'react';
import "./South.css"

import Item from "../../../../assetsDiscover/home3.jpg"
import Map from "../../../../assetsDiscover/map2.jpg"

const SouthIsland = () => {

  const backItem = {
    backgroundImage: `url(${Item})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    height: ' 40vh',
    marginLeft: "1.4rem",
    padding: "0.5rem",
    borderRadius: "13px",
    position: 'relative',
    marginTop: "1.3rem"
  };

  const backMap = {
    backgroundImage: `url(${Map})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    width: "26vw",
    height: 'clamp(300px, 90vh, 500px)',
    marginLeft: "1rem",
    padding: "0.5",
    borderRadius: "13px",
    position: 'relative',
  };

  return (
    <div className='body'>

      <h2>South Island</h2>
      <br />
      <div className='grid-body-container'>

        <div className='flex-body' id='body1'>
          <div className='grid1'>
            <h5 className='south-text'>The South Island of New Zealand is renowned for
              its mountains, lakes and glaciers. The Southern Alps, home to
              3,724m-high Aoraki Mt. Cook, run along the entire length of the
              island. In the southwest is Fiordland National Park, with
              steep-sided Milford Sound.</h5>

            <h5 className='south-text'>In the north is Abel Tasman National Park,
              known for its trails and ocean kayaking. Queenstown is famed for
              adventure sports like bungee jumping and skiing.</h5>
            <br />

            <div style={backItem} id='item' className='item'>
            </div>

          </div>

          <div className='flex'>
            <div style={backMap} className='map'>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SouthIsland