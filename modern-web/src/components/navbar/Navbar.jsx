import React, { useState } from 'react';
import { RiCloseFill, RiMenu3Line } from 'react-icons/ri';
import './navbar.css';
import Datazip_logo_bg from '../../images/Datazip_logo_bg.png';


const Menu = () => (
  <>
    <p><a href='#home'>Community</a></p>
    <p><a href='#home'>Careers</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='container'>
      <div className='datazip_navbar'>
        <div className='datazip_navbar-links'>
          <div className='datazip_navbar-links_logo'>
            <a href='#home'><img src={ Datazip_logo_bg } alt='logo' /></a>
          </div>
          <div className='datazip_navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='datazip_navbar-menu'>
          {toggleMenu
            ? <RiCloseFill color='#fff' size={25} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={25} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='datazip_navbar-menu_container scale-up-center'>
              <div className='datazip_navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar