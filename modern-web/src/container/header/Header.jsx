import React from 'react';
import './header.css';
import datazip_header1 from '../../images/datazip_header1.png'

const Header = () => {
  return (
    <div className='container'>
      <div className='datazip_header section_padding'>
        <div className='datazip_header-content'>
          <div className='datazip_header-content-left'>
            <h1> Abstracting complexity away from <br />
              <span>Data Engineering</span></h1>
          </div>

          <div className='datazip_header-content-right'>
            <div className='datazip_header-content-right-img'>
              <img src={datazip_header1} alt='datazip_header' />
            </div>
          </div>
        </div>
        <div className='datazip_header-content-center'>
          <p>A self-serve full-stack data platform for extracting, storing, processing and monitoring data, all while ensuring that the data is always suitable for quick decision-making.</p>
          <button><a>Book A Live Demo</a></button>
        </div>
      </div>
    </div>
  )
}

export default Header