import React from 'react'
import rig from '../../assets/rwbRigLogo.png';
// import pH from '../../assets/pH.jpeg';
import './about.css';

const About = () => {
  return (
    <div>
         <main className='home-main'>
        <div className='home-main-left'>
          <div className='home-main-left-container'>
            <div className='home-main-left-wrapper'>
              <div className='rig-logo'>
                <img src={rig} alt='rig logo' className='rigLogo' />
              </div>
              <div className='home-main-left-text'>
                <div className='home-main-text-container'>
                  <p>Write a paragraph that talks about your company here.
                    You can talk about your company's background, history, mission, vision, or philosophy
                    - anything that will introduce your brand's persona to your clients.
                    This will help build a connection between you and them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home-main-right'>
          <div className='home-main-right-container'>
            <img src={rig} alt='placeHolder' className='drillRig' />
          </div>

        </div>

      </main>
    </div>
  )
}

export default About