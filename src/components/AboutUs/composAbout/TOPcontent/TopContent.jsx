import React from 'react'
import "./Top.css"

import roses from "../../../../assetsAbout/About3.jpg"
import Nav from '../../../nav/nav';

const TopContent = () => {

  return (
      <div>
    
           
    <div className='top-content-container'>  
        
          <div className='top-content-about'>
            
                <div className='top-text' id='top-text1'>
                        
                    <h2>About Phnes. Travels</h2>
                      <h5 >Since 1975, Phnes. Travels has been focused on bringing our customers the best in esteem and quality travel game plans. <br /> We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.     
                     Our honor-winning organization reliably positions as a standout amongst other offices in the nation (Travel Weekly, Business Travel Weekly), and is the best individual from the renowned Signature Travel Network, an overall association enabling us to give our clients unmatched.  <br />
                     Since 2009, our solid organizational culture and enthusiasm for our calling have brought about our being named every year as one of the “Best Places To Work” in Accra Ghana. Our administration is dynamic on different tourism warning sheets and panels for movement associations. <br /> Fulfilled workers lead to fulfilled clients. We know the development and accomplishment of our organization relies on satisfying our customer’s needs each day. That is additionally our guarantee.</h5>
                </div>
                <div  className='top-text' id='top-text2'>
                    
                      <img src={roses} alt="" className='roses' />
                    
                </div>
          </div>
    </div> 
    </div>
  )
}

export default TopContent