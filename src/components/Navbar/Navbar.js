// navbar component
import React from 'react'
import './navbar.css';
import logo from '../../assets/swlogorwb.png';
import { Link } from 'react-router-dom';
import {FaLinkedin ,FaFacebookSquare } from 'react-icons/fa'
import useAnalyticsEventTracker from '../GATracker/useAnalyticsEventTracker';




const Navbar = () => {
    const gaEventTracker = useAnalyticsEventTracker('Navbar');
    return (
        <>
            <nav className='navbar'>
                <div className='nav-left'>
                    <Link to='/'><img loading='lazy' className='nav-logo' src={logo} alt='logo' /></Link>
                    
                </div>
                <div className='nav-center'>
                    <span className='nav-links'>
                        
                        <Link className='nav-link' to='/about'>About Us</Link>
                        <Link className='nav-link' to='/services'>Services</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link>
                        <Link className='nav-link' to='/gallery'>Gallery</Link>
                    </span>
                   
                </div>
                <div className='nav-right'>
                <a href='https://www.facebook.com/SWFoundationContractors' onClick={() => gaEventTracker('facebook')}><FaFacebookSquare /></a> 
                <a href='https://www.linkedin.com/company/81499019' onClick={() => gaEventTracker('linkedin')}><FaLinkedin /></a>
                </div>
                

            </nav>
        </>

    )
}




export default Navbar