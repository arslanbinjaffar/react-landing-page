import React from 'react'

const Navbar = () => {
  return (
    <div className='navigation'>
    <input type="checkbox" name="navToggle" id="nav-toggle"  className='navigation__checkbox'/>
    <label htmlFor="nav-toggle" className='navigation__button'>
   <span className='navigation__icon'>
   </span>

    </label>
    <div className="navigation__background"></div>
    <div className='navigation__nav'>
        <ul className='navigation__list'>
            <li className='navigation__item'>
                <a href="" className='navigation__link'>
                    about natous
                    </a></li>
            <li className='navigation__item'>
                <a href="" className='navigation__link'>
                    your benefits
                    </a></li>
            <li className='navigation__item'>
                <a href="" className='navigation__link'>
                    popular tours
                    </a></li>
            <li className='navigation__item'>
                <a href="" className='navigation__link'>
                    Stories
                    </a></li>
            <li className='navigation__item'>
                <a href="" className='navigation__link'>Book now</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar