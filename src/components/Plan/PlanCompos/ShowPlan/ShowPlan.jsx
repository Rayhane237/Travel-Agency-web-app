import React from 'react'
import flights from "../../../../assets/flights.jpg";
import hotels from "../../../../assets/hotels.jpg";
import { useNavigate } from 'react-router-dom';

import "./ShowPlan.css"

const ShowPlan = () => {
     
       const navigate = useNavigate()

  
      const navigateFlights =()=>{
       navigate("/Flights")
      }
      const navigateHotels =()=>{
       navigate("/Hotels")
      }

     const backgroundFlights = {
    backgroundImage: `url(${flights})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'right', 
    backgroundRepeat: 'no-repeat', 
    height: '37vh', 
    width: "280px",
    borderRadius:"10px" ,
  };
    
    const backgroundHotels = {
    backgroundImage: `url(${hotels})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'left', 
    backgroundRepeat: 'no-repeat', 
    height: '37vh', 
    width: '280px',
    borderRadius: "10px", 
  };



  return (
    <div className='show-plan-container' > 
           <div  style={backgroundFlights}  >     
              <div className='show-plan' >
                       <h2>Flights</h2>
                      <h5 >Search flights & places and book for your amazing trips.</h5>
                      <button onClick={navigateFlights} className='s-btn'> Show Flights</button>
              </div>
            </div>
           
            <div style={backgroundHotels} >
              <div className='show-plan'> 
                       <h2>Hotels</h2>
                      <h5  >Search Hotels & places and book for your amazing trips.</h5>
                      <button onClick={navigateHotels} className='s-btn'> Show Hotels</button>
              </div>
            </div>
              
       

    </div>
  )
}

export default ShowPlan