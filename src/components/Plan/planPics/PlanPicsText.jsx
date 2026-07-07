import React from 'react'
import seaPhoto from "../../../assets/photo-sea.jpeg";
import beachPhoto from "../../../assets/photo-beach.jpeg";
import airplanePhoto from "../../../assets/photo-airplane.jpeg";

import "./PlanPicsText.css"
const PlanPicsText = () => {
    console.log("loaded");
  return (
    
  <div id='body-picsText'>

        <div className='pics-container'>
           <div className='image ' >
              <img id='seaPhoto' src={seaPhoto} alt="sea" />
            </div>
           <div className='image'>
               <img  id='beachPhoto' src={beachPhoto} />
           </div>
           <div className='image'>
             <img id='airplanePhoto' src={airplanePhoto} />
           </div>

        </div>
  
  <div className='text-container'>  
      <div className='container1'>
        
          <h3 style={{color:"black"}}>Plan your perfect trip</h3>
          <h6 style={{color:"grey"}}>🌍✨ Discover the World with Us ✨🌍
            At Phnes Travels, we believe every journey should be more than just a trip — it should be an unforgettable experience. Whether you dream of relaxing on pristine beaches, exploring vibrant cities, or embarking on thrilling adventures, our dedicated team is here to craft the perfect travel plan for you. With personalized packages, expert guidance, and 24/7 support, we make traveling seamless, exciting, and stress-free. Your dream destination is just a plan away — let us take you there.
          </h6>
       </div>
      <div className='container2'>
             <div className='side'>
                     <p>150+</p>
                     <h6>Flight Destinations</h6>
             </div>
              <div className='side'>
                     <p>250+</p>
                     <h6>Hotels</h6>
              </div>
              <div className='side'>
                    <p>80</p>
                     <h6>Elite Transportation</h6>
              </div>
              <div className='side'>
                   <p>40+</p>
                  <h6>We help to find your dream place</h6>
                  <br />
               </div>

             
        </div>
      </div>
    </div>
  )
}

export default PlanPicsText