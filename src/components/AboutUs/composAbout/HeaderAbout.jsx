import React from 'react'

import Hotel from "../../../assetsAbout/About5.jpg"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';


const HeaderAbout = () => {
      
           const [sidebarOpen ,setSidebarOpen] = useState(false)
           const toggleSidebar =()=> setSidebarOpen(!sidebarOpen)
                
             
        const background = {
                  backgroundImage: `url(${Hotel})`,
                   backgroundSize: 'cover', 
                   backgroundPosition: 'right', 
                   backgroundRepeat: 'no-repeat', 
                   width:"100%",
                   height:"370px",
                   margin:"0",
                   padding:"0",
                   borderRadius:"0px" ,
                   position:'relative',
                  };
           
           
           const navigate = useNavigate()
              const navigateHome =()=>{
               navigate("/")
              }
         
               const navigateFlights =()=>{
                navigate("/Flights")
               }
               const navigateHotels =()=>{
                navigate("/Hotels")
               }
               const navigateDiscover =()=>{
                navigate("/Discover")
               } 
                 const navigateAboutUs =()=>{
                 navigate("/About")
                }

             
              
              

  return (
            <header style={background}>
                     <div className='black'> 
                             {!sidebarOpen && (
                  <button className='navbar-toggle-btn' onClick={toggleSidebar}>
                                              <IoIosMenu style={{color:"grey"}} />
                                          </button>
                           
                                      )}
                            
                                     <div className={`navbar-container ${sidebarOpen ? 'open' : ''}`}>
                                      {sidebarOpen && (
                                       <button  style={{color:"rgb(16, 92, 87)"}}  className='navbar-close-btn' onClick={toggleSidebar}>
                                              <RiCloseLargeFill />
                                          </button>
                                       )}
                                         <h2>PhnesTravel</h2>
                                        <button className='navbar-btn' onClick={navigateHome}>Plan</button>
                                        <button className='navbar-btn' onClick={navigateFlights}>Flights</button>
                                        <button className='navbar-btn' onClick={navigateHotels}>Hotels</button>
                                        <button className='navbar-btn' onClick={navigateDiscover}>Discover</button>
                                        <button className='navbar-btn' onClick={navigateAboutUs}>About us</button>
                                     </div>
                                       
                              
                              <div className='text-home'>
                                     <h2>About us</h2>
                              </div>
                              
                          </div>
                       </header>
           
       )
  
}

export default HeaderAbout