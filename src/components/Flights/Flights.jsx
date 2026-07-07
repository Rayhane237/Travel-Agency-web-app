import React from 'react'
import "./Flights.css"
import HeaderFlights from './Flights.compos/HeaderFlights'
import Destinations from './Flights.compos/Destination/Destinations'
import Kayaking from './Flights.compos/Kayaking/Kayaking'
import Nav from '../Nav/Nav'
import Footer from "../Footer/Footer"


const Flights = () => {
    
  return (
    <div>
      <div>
        <Nav />
      </div>
       
       <div className='compo1'>
            <HeaderFlights />
       </div>
     
       <div className='compo2'>
           <Destinations />

       </div>
          <br />

      <div className='section-gap'>
           <Kayaking />
      </div>

      <div className='compo4'>
          <Footer />
      </div>
                
           
       



       





    </div>
  )
}

export default Flights