import React from 'react'
import './header.css';
import {AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useState } from 'react';
import { CarouselData } from './CarouselData';





const Header = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  
  return (
    <section className='carousel'>
      <AiOutlineLeft className='left-arrow-c' onClick={prevSlide}/>
      <AiOutlineRight className='right-arrow-c' onClick={nextSlide}/>
      {CarouselData.map((slides, index) => {
        return (
          <div className={ index === current ? 'slide active' : 'slide' } key={ index }>
            { index === current && (<img fetchpriority="high" src={slides.image} alt={slides.alt}  className='carousel-img' />)}
          </div>
        )
      },)}

    </section>
  )
}

export default Header