import React from 'react'
import header from './header';
import logo from '../../img/logo-white.png'
const Header = () => {
  return (
        <header className='header'>
            <div className="header__logo-box">
                <img src={logo} alt="headerlogo" className="header__logo" />
            </div>
            <div className='header__text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary--main'>outdoors</span>
                    <span className='heading-primary--sub'>
                        is where life happens
                    </span>
                </h1>
                <a href="#" className='btn btn--white btn--animated btn-white'>
                  Discovers our tours
                </a>
            </div>
        </header>
  )
}

export default Header