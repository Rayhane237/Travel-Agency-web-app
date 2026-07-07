import React from 'react'
import Nav from '../Nav/Nav'
import HeaderAbout from './composAbout/HeaderAbout'
import TopContent from './composAbout/TOPcontent/TopContent'

import Team from './composAbout/team/Team'
import BottomIcons from './composAbout/bottom/BottomIcons'
import Footer from '../Footer/Footer'



const AboutUs = () => {
        

  return (
    <div>
       <div>
        <Nav />
       </div>

           <div className='compo1'>
            <HeaderAbout/>

           </div>
             <br />
           
           <div className='top-compo'>
            
            <TopContent/>
           </div>
            <br />
         

           < div className='compo4'>
            <Team />
           </div>

            <br />
          
            <div className='compo5'>
            <BottomIcons />
           </div>
              <br />
           <div className='compo6'>
            <Footer />
           </div>



    </div>
  )
  

}

export default AboutUs