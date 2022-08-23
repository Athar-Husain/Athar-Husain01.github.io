import React from 'react';
import './footer.css';
import { RiLinkedinFill, RiTwitterFill } from 'react-icons/ri';
import Datazip_logo_bg from '../../images/Datazip_logo_bg.png';
// import { Feature } from '../../components';



const Footer = () => {
  return (
    <div className='container'>
      <div className='datazip_footer section_padding'>
        <div className='datazip_footer-content'>
        <a href='#home'><img src={Datazip_logo_bg} alt='Datzzip_logo' /></a>
          <div className='datazip_footer-content-icons'>
            <RiLinkedinFill />
            <RiTwitterFill />
          </div>
        </div>
        <div className='datazip_footer-links'>
          <p><a href='#home'>Contact Us</a></p>
          <p><a href='#home'>About Us</a></p>
          <p><a href='#home'>Privacy Policy</a></p>
          <p><a href='#home'>Blog</a></p>
        </div>
      </div>
      <div className='datazip_footer_copyright'>
        <h5> Made with ❤️ by <a href='https://github.com/Athar-Husain' target='blank'>Athar_Frontend_dev</a> from India.</h5>
      </div>
    </div>
  )
}

export default Footer