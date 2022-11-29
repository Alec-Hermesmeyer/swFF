import React from 'react'
import './poloroid.css'
import logo from '../../assets/swlogorwb.png'
import ph from '../../assets/pH.jpeg'


const Poloroid = () => {
    function polo () {
        return(
            <div className='poloroid'>
                <div className='poloroid-container'>
                <img className='polo-photo' loading='lazy' src={ph} alt='placeholder'></img>
                    <div className='poloroid-wrapper'>
                        <img className='poloroid-logo' loading='lazy' src={logo} alt="S&W Foundation Logo" />    
                    </div>
                </div>
            </div>
        )
    }
    
  return (
    <div className='gal'>
        {polo()}
    </div>
  )
}

export default Poloroid