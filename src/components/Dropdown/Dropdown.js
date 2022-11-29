import React from 'react'
import { Link } from 'react-router-dom'
import {FaLinkedin ,FaFacebookSquare } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './dropdown.css'

const Dropdown = () => {
    
    return (
        <div className='mobile-drop' style={{ backgroundColor: 'whitesmoke' }}>
            <div className='mobile-links'>
                <Link className='drop-nav-link' to='/about'>About Us</Link>
                <Link className='drop-nav-link' to='/services'>Services</Link>
                <Link className='drop-nav-link' to='/contact'>Contact</Link>
                <Link className='drop-nav-link' to='/gallery'>Gallery</Link>
                
            </div>
            <div className='social-links'>
                <a href='https://www.facebook.com/SWFoundationContractors'><FaFacebookSquare /></a> <a href='tel: +2147328387'><BsFillTelephoneFill /></a><a href='https://www.linkedin.com/company/81499019'><FaLinkedin /></a>
            </div>

        </div>
    )
}

export default Dropdown