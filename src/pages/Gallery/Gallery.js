import React from 'react'
import { Navbar, Mobile, Poloroid } from '../../components'

const Gallery = () => {
  return (
    <>
      <nav>
        <Navbar />
        <Mobile />
      </nav>


      <section>
        <Poloroid />
      </section>
    </>

  )
}

export default Gallery