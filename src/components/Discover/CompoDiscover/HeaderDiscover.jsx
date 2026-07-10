import React from 'react'
import "../Discover.css";
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from "../../../assetsDiscover/6.jpg"
import { IoIosMenu } from 'react-icons/io';
import { RiCloseLargeFill } from 'react-icons/ri';


const HeaderDiscover = () => {
       
             const [sidebarOpen ,setSidebarOpen] = useState(false)
             const toggleSidebar =()=> setSidebarOpen(!sidebarOpen)
                 

          const background = {
            backgroundImage: `url(${Home})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'right', 
            backgroundRepeat: 'no-repeat', 
            width:"100vw",
             height:"370px",
            margin:"0",
            padding:"0",
            borderRadius:"0px" ,
            position:'relative',
          };
           
        
    

  return (
             <header style={background}>
                      <div className='black'> 
                           
                               
                               <div className='text-home'>
                                      <h2> Discover.</h2>
                               </div>
                               
                           </div>
                        </header>
            
        )

   
}

export default HeaderDiscover