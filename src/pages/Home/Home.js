import React from 'react'

import { Navbar, Intro, Header, Footer, Drill, Mobile } from '../../components';
import { CarouselData } from '../../components/Header/CarouselData';

const Home = () => {
  return (
    <div className=' home'>
      <header >
        <Navbar />
        <Mobile />
      </header>

      <body>
        <section>
          <Header slides={CarouselData}/>
        </section>
        <section>
          <Intro />
        </section>
        <section>
          <Drill />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default Home