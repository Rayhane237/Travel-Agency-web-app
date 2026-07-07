import React from 'react'
import team1 from "../../../../assetsAbout/team1.jpg"
import team2 from "../../../../assetsAbout/team2.jpg"
import team3 from "../../../../assetsAbout/team3.jpg"
import team4 from "../../../../assetsAbout/team4.jpg"
import team5 from "../../../../assetsAbout/team5.jpg"

import './Team.css'

const Team = () => {
      
  return (
    <div  className='team-container'>
        <br />
            <div className='team-header'>
             <h2 style={{color:"black"}}>Meet our team</h2>
             <h3 style={{color:"rgb(36, 113, 120)"}}>Meet the people who help keep Phnes.Travels running</h3>
         </div>
            <br />
        <div className='team-section'>
             <div className='team'>
                  <img src={team1} className='team-img'/>
                  <h3>Viola Gates </h3>
                  <h4>International Relations</h4>
             </div>
              <div className='team'>
                  <img src={team2} className='team-img' />
                  <h3>Henry Cemit</h3>
                  <h4>Web Designer</h4>
             </div>
             <div className='team'>
                  <img src={team3} className='team-img' />
                  <h3>Kojo Apei</h3>
                  <h4>Marketing Director</h4>
             </div>
             <div className='team'>
                  <img src={team4} alt="" className='team-img' />
                  <h3>Karen Pit</h3>
                  <h4>Medical Check</h4>
             </div>
             <div className='team'>
                  <img src={team5} alt="" className='team-img' />
                  <h3>Doris Heathen</h3>
                  <h4>Aviation Head</h4>
             </div>
             
            
        </div>


    </div>
  )
}

export default Team