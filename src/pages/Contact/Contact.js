import React from 'react'
import {  ContactForm, Footer, Mobile, Navbar } from '../../components'
import './contact.css'



const Contact = () => {

  return (
    <div className='contact-page'>
      <header className='contact-header'>
      <Navbar />
      <Mobile />
      </header>
      <section>
       <ContactForm />
      </section>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Contact