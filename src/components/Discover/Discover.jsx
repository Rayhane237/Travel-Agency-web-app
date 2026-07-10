import React from 'react'
import "./Discover.css"
//import { useNavigate } from 'react-router-dom'
import HeaderDiscover from './CompoDiscover/HeaderDiscover'
import SouthIsland from './CompoDiscover/South/SouthIsland'
import NaturalFeatures from './CompoDiscover/natural/NaturalFeatures';
import Footer from "../Footer/Footer"
import Nav from '../Nav/Nav'

const Discover = () => {

  return (
    <div>
      <div>
          <Nav />
      </div>

            <div className='compo1'>
                  <HeaderDiscover />
            </div>

             <div className='compo2'>
                  <SouthIsland />    
              </div>
            
              <br />
                <div className='compo3'>
                   <NaturalFeatures />
                </div>
           
          


            <div className='compo4'>
                <Footer />
            </div>
    </div>
  )
}

export default Discover