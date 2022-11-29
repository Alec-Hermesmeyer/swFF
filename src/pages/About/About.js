import React from 'react'
import { Footer, Hero, Mobile, Navbar } from '../../components'
import { Link } from 'react-router-dom'
import './about.css'


function infoSection(){
  const data = [
    {
      title: 'We want to be your one stop shop for all your Pier Drilling Needs',
      heading: 'At S&W Foundation Contractors, we pride ourselves on our safety procedures and versatility, many members of our team OSHA and TEXO certified these foundation repair & drilling experts are able to tackle projects of any size',
      desc: 'We provide commercial, residential, and turnkey drilling services, no matter the project our team of foundation repair experts can handle it..',
      out: 'Please contact us to speak to one of our team members today to discuss your next project and how we can make it a success.',
      phone: '214-703-0484'
    }
  ]
  const infoData = data.map((element) => {
    return (
      <div className='about-info'>
        <div className='about-info-container'>
          <div className='about-info-wrapper'>
            <h1 className='about-info-title'>{element.title}</h1>
            <br></br>
            <p>{element.heading}</p>
            <br></br>
            <p>{element.desc}</p>
            <br></br>
            <p>{element.out}</p>
            <br></br>
            <span>Office Line: <b>{element.phone}</b></span>
          </div>
        </div>
      </div>
    )
  }
  )
  return (
    <div>{infoData}</div>
  )
}
function aboutContact () {
  const data = [
    {
      title: 'S&W Foundations would love to be apart of your next project',
      desc: 'We have a wide variety of top of the line machines allowing us to handle any Commercial Pier Drilling, Limited-Access Pier Drilling, or Turnkey Drilling Solutions project'
    }
  ]
  const contactData = data.map((element) => {
    return (
      <div className='about-contact'>
        <div className='ac-container'>
          <div className='ac-wrapper'>
            <h1 className='ac-h1'>{element.title}</h1><br></br>
            <h3 className='ac-h3'>{element.desc}</h3><br></br>
           <Link to='/contact'> <button className='ac-button'>Get A Quote</button></Link>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>{contactData}</div>
  )
}
const About = () => {
  return (
    <div className='About-page'>
      <header className='about-header'>
        <Navbar />
        <Mobile />
      </header>
      <div className='about-body'>
        <section className='about-hero-section'>
        <Hero />
        </section>
        <section className='about-info-section'>
          {infoSection()}
        </section>
        <section className='ac-section'>
          {aboutContact()}
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
      
    </div>
    
  )
}

export default About