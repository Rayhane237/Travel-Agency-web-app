import React from 'react'
import "./Discover.css"
//import { useNavigate } from 'react-router-dom'
import HeaderDiscover from './CompoDiscover/HeaderDiscover'
import SouthIsland from './CompoDiscover/SouthIsland'
import NaturalFeatures from './CompoDiscover/NaturalFeatures';
import Footer from "../Footer/Footer"

import FooterDiscover from './CompoDiscover/FooterDiscover'
const Discover = () => {

  return (
    <div>
            <div className='compo1'>
                  <HeaderDiscover />
            </div>

             <div >
                  <SouthIsland />
            </div>
              <br />
              
             <div>
              <NaturalFeatures />
            </div>
            


            <div className='compo4'>
                <Footer />
            </div>
    </div>
  )
}

export default Discover