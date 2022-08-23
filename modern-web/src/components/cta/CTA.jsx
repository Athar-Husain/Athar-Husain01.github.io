import React from 'react';
import './cta.css';
import { RiArrowRightLine } from 'react-icons/ri'

const CTA = () => {
  return (
    <div className='container'>
      <div className='datazip_cta gradient_bar'>
        <div className='datazip_cta-content'>
          <h2>Join Our Datazip Newsletter</h2>

        </div>
        <div className='datazip_cta-action'>
          <input type='email' placeholder='Your Best Email' />
          <span><RiArrowRightLine  type='submit'/></span>
          
        </div>

      </div>
        
    </div>
  )
}

export default CTA