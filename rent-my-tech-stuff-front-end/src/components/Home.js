import React from 'react'
import '../home.css'

const Home=()=>{

    return (
      <div className='home-container'>

      
        <div className='container'>
            <section id="home-header">

               <h1>Rent My Tech Stuff</h1>
               <div id='tech-image'></div>               
            </section>
        </div>  
        <div className='container'>
             <p id= "app-description-middle">
                Rent My Tech Stuff: like AirBnB, but for high end electronics. 
                Are you tired of paying ridiculous fees for camera and other equipment rentals? 
                Bypass the middleman and rent from a real person!
            </p>

        </div>
        <div className='container'>
            <p >
                Signup/Login at the top right of the screen to begin renting items from owners 
                or list items for rent if your the owner of equipment you wish to post for rent!
            </p>

        </div>
      </div>
           
            




        
    )

}

export default Home