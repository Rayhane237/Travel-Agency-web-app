import React from 'react'

import Header from "./SeeHotels/Header"
import Research from "./SeeHotels/research/Research"
import Destinations from './SeeHotels/Destinations/Destinations'
import Kayaking from './SeeHotels/Kay/Kayaking'
import Footer from "../Footer/Footer"
import Nav from '../Nav/Nav'

const Hotels = () => {
  return (
    <div>
      <div>
          <Nav />

      </div>
            <div className='compo1'>
             
                 <Header />
            </div>
             
              <div className='compo2'>
                 <Research />
            </div>
             
            <div >
                 <Destinations />

               
            </div>
                <br />

              <div className='compo4-hotels'>
                 <Kayaking />
            </div>
          
            <div className='compo5-hotels'>
                 <Footer />
            </div>








     
    </div>
  )
}

export default Hotels