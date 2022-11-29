import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div>
        <section className='hero-section'>
           <div className='hero-container'>
               <div className='hero-wrapper'>
               <aside className='hero-left'>
               <h1><b>S&W FOUNDATION CONTRACTORS IS THE RELIABLE CHOICE FOR ALL YOUR FOUNDATION PIER DRILLING NEEDS</b></h1>
               <br></br>
               <p><em>S&W Foundation Contractors has been in business since 1986. We are a family-owned and operated pier drilling company located in Rowlett, Texas, serving the entire United States.</em></p>
               <br></br>
               <h1><b>WITH MORE THAN 32 YEARS OF EXPERIENCE IN THE PIER DRILLING INDUSTRY.</b></h1>

            </aside>
            <div className='hero-center'>
              <div className='spacer'></div>
            </div>
            <aside className='hero-right'>
                <p>
                 <em>
                    We operate one of the largest fleets of limited access pier drilling equipment in the United States. 
                    From 7′ tall rigs inside residential homesteads to 35′ foot limited access rigs for power line projects or 
                    large warehouse spaces. We have recently expanded our fleet to include open access drilling to include drilled piers 
                    from 12-inch diameter to 12-foot diameter and belling capabilities up to 126 inches.
                 </em>
                </p>

            </aside>
               </div>
           </div>
        </section>
    </div>
  )
}

export default Hero