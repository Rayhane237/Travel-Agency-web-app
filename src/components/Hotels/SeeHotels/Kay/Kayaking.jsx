import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Kay.css'


const Kayaking = () => {
        const navigate = useNavigate()
         const navBookFlight =()=>{
          navigate("/BookFlight")
         }
             
          
  return (
    <div className='h-body'>
      <div className='k-top-text'>
        <h3 style={{color:" rgb(36, 102, 117)"}}>Kayaking</h3>
        <h2 style={{color:"black"}}>Discover your love</h2>
     </div>
        <div className='kayaking-container-f'>
       
          <div className='kayaking-item-f'>
               <div className='baja'>
                 <h2 >Kayaking in Greece</h2>
                 <h3 className='baja-price'> From $600</h3>
               </div>
                   <br />
                 <h5>Adventure cruising is more than a growing trend to connect with nature, wildlife, and yourself. It’s a community a adventurers that is here to stay. With luxurious accommodations and unmatched scenery, our Baja kayaking is the perfect escape.</h5>
                <button onClick={navBookFlight}  className='baja-btn' >Book Flight </button>
          </div> 

     </div> 


    </div>
    

   

  )
}

export default Kayaking