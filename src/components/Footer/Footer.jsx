import React from 'react'
import logo from '../../img/logo-green-2x.png'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__logo-box">
            <img src={logo} alt="" className="footer__logo" />
        </div>
        <div className="row">
            <div className="col-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className='footer__link'>company</a></li>
                            <li className="footer__item">
                            <a href="" className='footer__link'>contact us</a></li>
                        <li className="footer__item">
                            <a href="" className='footer__link'>careers</a></li>
                        <li className="footer__item">
                            <a href="" className='footer__link'>privacy policy</a></li>
                        <li className="footer__item">
                            <a href="" className='footer__link'>Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Bulit by <a href="" className="footer__link">Arslan bin jaffar    </a>
                      Thanks to my Teacher  <a className="footer__link">jonas schmedthman </a> 
                     for his online course
                    <a href="" className='footer__link'>Advanced css and sass</a>
                    copyright &copy; by my teacher .you are 100% genuinely good teacher
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer