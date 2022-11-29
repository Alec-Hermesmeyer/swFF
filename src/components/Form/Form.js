// import { useState } from 'react'
import './form.css'


const ContactForm = () => {


  return (
    <div className='form'>
      <div className='form-container'>
        <div className='form-wrapper'>
          <div className='form-left'>

          </div>
          <div className='form-right'>
            <form className='contact-form'>
              <input className='form-input' type='text' placeholder='Your Name'></input>
              <input className='form-input' type='email' placeholder='Your Email'></input>
              <input className='form-input' type='tel' placeholder='Contact Number'></input>
              <span className='checkbox'>
                <label className='span-labels'>Commercial</label><input className='span-checkbox' type='checkbox'></input>
                <label className='span-labels'>Limited-Access</label><input className='span-checkbox' type='checkbox'></input>
                <label className='span-labels'>Turnkey</label><input className='span-checkbox' type='checkbox'></input>
              </span>
              <textarea className='contact-message' placeholder='Tell Us About Your Project'></textarea>
              <input className='form-submit' type='submit'></input>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}


export default ContactForm