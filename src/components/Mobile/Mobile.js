import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '../../assets/swlogorwb.png';
import { Dropdown } from '../index'
import './mobile.css'

const Mobile = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const toggleMenu = () => {
        if (isClicked === false) {
            setShowMenu(true)
            setIsClicked(true)
        } else {
            setShowMenu(false)
            setIsClicked(false)
        }
    }
    
    return (
        <>
            <nav className='mobile-nav'>
                <div className='mv-con'>
                    <div className='mv-wrapper'>
                        <div className='mv-top'>
                            <div className='mv-left'>

                            </div>
                            <div className='mv-center'>
                                <Link to='/'><img loading='lazy' className='nav-logo' src={logo} alt='logo' /></Link>

                            </div>
                            <div className='mv-right'>
                                <div className='mobile-bar' >
                                    <FaBars onClick={toggleMenu} />
                                </div>

                            </div>
                        </div>
                        <div className='mv-bottom'>

                        </div>
                    </div>
                </div>
                <div className='dropdown-section' style={{display: showMenu ? "flex" : "none"}}>
                    <Dropdown />
                </div>
            </nav>
        </>
    )
}

export default Mobile